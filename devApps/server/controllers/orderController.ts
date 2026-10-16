import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2/promise";
import { modifyQuery, selectQuery, withTransaction, executeWithRety } from "@connect/query.js";
import { Order, OrderWithPoint, OrderWithWorker } from "@models/Order.js";
import { SimpleRow } from "@models/SimpleRow.js";
import { sendFcmMsg } from "@connect/fcm.js";
import { Decimal } from "decimal.js";
import { getFcmTokenBySeq } from "@repo/repo.fcmToken.js";
import * as repo from "@repo/repo.order.js";
import * as svc from "@svc/svc.order.js";
import { sendAdminEvent } from "./sseController.js";

const getCancelReadyCount = async () => {
    const queryStr = `SELECT COUNT(*) as cnt FROM ams_order WHERE situation = ?`;
    const [result] = await selectQuery<SimpleRow<{ cnt: number }>[]>(queryStr, ["cancelReady"]);
    return result.cnt;
};

export async function insertOrder(req: Request, res: Response) {
    const results: { index: number; success: boolean; error?: string }[] = [];
    const orderDatas = req.body;
    try {
        if (!Array.isArray(orderDatas)) throw new Error("Request body must be an array");

        for (let i = 0; i < orderDatas.length; i++) {
            try {
                await repo.insertSingleOrder(orderDatas[i]);
                results.push({ index: i, success: true });
            } catch (error) {
                results.push({ index: i, success: false, error: (error as Error).message });
            }
        }
        res.json({ success: true, message: results });

        //fcm 알림 전송
        for (const orderData of orderDatas) {
            try {
                const industry = orderData.industry;
                const sido = orderData.sido;
                const sigungu = orderData.sigungu;

                //업체 대상 알림
                let where = "";
                let prepared: any[] = [];
                if (industry === "DE") {
                    where = `type='b' AND industry = ?`;
                    prepared = [industry];
                } else {
                    where = `type='b' AND industry = ? AND sido = ?`;
                    prepared = [industry, sido];
                    // where = `type='b' AND industry = ? AND sido = ? AND sigungu = ?`;
                    // prepared = [industry, sido, sigungu];
                }

                const fcmTokenRows = await selectQuery<SimpleRow<{ fcmToken: string }>[]>(
                    `SELECT fcmToken FROM ams_member WHERE ${where} AND fcmToken IS NOT NULL AND fcmToken != ''`,
                    [prepared].flat()
                );

                if (fcmTokenRows.length > 0 && fcmTokenRows[0].fcmToken) {
                    const fcmToken = fcmTokenRows[0].fcmToken;
                    const title = "새로운 주문이 접수되었습니다.";
                    const body = `주문 내용: ${orderData.title}`;
                    const dataPayload = { title, body, type: "wait" };
                    const fcmSendResult = await sendFcmMsg({ token: fcmToken, title, body, data: dataPayload });
                    console.log("FCM send result to businesses:", fcmSendResult);
                }
            } catch (fcmError) {
                console.error(`Failed to send FCM for order ${orderData.requester}:`, fcmError);
            }
        }
    } catch (error) {
        res.json({ success: false, message: `<api insertOrder> ${error}` });
    }
}

export async function getAllOrders(req: Request, res: Response) {
    try {
        const queryStr = `
         SELECT 
            o.*, w.company as workerCompany, w.phone as workerPhone, r.name as requesterName, r.phone as requesterPhone
            FROM ams_order o
            LEFT JOIN ams_user r ON o.requester = r.seq
            LEFT JOIN ams_user w ON o.worker = w.seq
            WHERE o.situation != 'cancel'
            ORDER BY o.wday DESC
        `;
        const orders = await selectQuery<OrderWithPoint[]>(queryStr);
        res.json({ success: true, message: orders });
    } catch (error) {
        console.error(`getAllOrder err : ${error}`);
        res.json({ success: false, message: `<api getAllOrder> ${error}` });
    }
}

export async function getOrderForAdmin(req: Request, res: Response) {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const situation = req.query.situation as string;
        const offset = (page - 1) * limit;
        if (!["play", "finish"].includes(situation)) {
            return res.json({ success: false, message: "invalid situation" });
        }

        const situationCondition =
            situation === "finish" ? `o.situation = 'finish'` : `o.situation != 'finish' AND o.situation != 'cancel'`;
        const countSql = `SELECT COUNT(*) as total FROM ams_order o WHERE ${situationCondition}`;
        const countResult = await selectQuery<SimpleRow<{ total: number }>[]>(countSql);
        const total = countResult[0].total;

        const orderByCondition = situation === "finish" ? `o.fday` : `o.wday`;
        const dataSql = `
            SELECT 
                o.*,
                c.cancel_reason AS cancelReason,
                c.wday AS cancelWday,
                COALESCE(w.company, m.company) as workerCompany, 
                COALESCE(w.phone, m.phone) as workerPhone,
                r.name as requesterName,
                r.phone as requesterPhone
            FROM ams_order o
            LEFT JOIN ams_user r ON o.requester = r.seq
            LEFT JOIN ams_user w ON o.worker = w.seq
            LEFT JOIN ams_member m ON o.worker = m.seq
            LEFT JOIN ams_order_cancel c ON o.seq = c.order_seq
            WHERE ${situationCondition}
            ORDER BY ${orderByCondition} DESC
            LIMIT ? OFFSET ?
        `;

        const orders = await selectQuery<OrderWithPoint[]>(dataSql, [limit, offset]);

        res.json({
            success: true,
            message: {
                data: orders,
                total
            }
        });
    } catch (error) {
        console.error(`getOrders err : ${error}`);
        res.json({ success: false, message: String(error) });
    }
}

export async function getCancelOrderForAdmin(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const situation = req.query.situation as string;
    const result = await svc.getCancelOrderForAdmin(page, limit, situation);
    const countSql = `SELECT COUNT(*) as total FROM ams_order o WHERE situation = ?`;
    const countResult = await selectQuery<SimpleRow<{ total: number }>[]>(countSql, [situation]);
    const total = countResult[0].total;

    res.status(200).json({ data: result, total });
}

export async function getOrderForC(req: Request, res: Response) {
    const { userSeq } = req.params;
    try {
        const queryStr = `
            SELECT 
                o.*,
                c.cancel_reason AS cancelReason, 
                COALESCE(w.company, m.company) as workerCompany, 
                COALESCE(w.phone, m.phone) as workerPhone
            FROM ams_order o
            JOIN ams_user u ON o.requester = u.seq 
            LEFT JOIN ams_user w ON o.worker = w.seq
            LEFT JOIN ams_member m ON o.worker = m.seq
            LEFT JOIN ams_order_cancel c ON o.seq = c.order_seq
            WHERE o.requester = ? AND o.situation != 'cancel'
            ORDER BY o.wday DESC
        `;
        const orders = await selectQuery<OrderWithWorker[]>(queryStr, [Number(userSeq)]);
        console.log("orders : ", orders);
        res.json({ success: true, message: orders });
    } catch (error) {
        res.json({ success: false, message: `<api getOrderForC> ${error}` });
    }
}

export async function getOrderForB(req: Request, res: Response) {
    const { bseq, industry, sido, sigungu } = req.params;
    console.log("getOrderForB : ", bseq, industry, sido, sigungu);
    let queryStr = "";
    let prepared: any[] = [];
    if (industry === "FX") {
        queryStr = `SELECT o.* 
            FROM ams_order o 
            WHERE o.industry = ? 
            AND o.sido = ? AND (o.worker = ? OR o.worker IS NULL)
            ORDER BY o.wday DESC
        `;
        prepared = [industry, sido, Number(bseq)];
    }
    if (industry === "RT") {
        let sidoCondition = "o.sido = ?";
        if (Number(bseq) === 14) sidoCondition = "(o.sido = ? OR o.sido = '11')";
        queryStr = `
        SELECT o.*
        FROM ams_order o
        WHERE o.industry = ?
            AND ${sidoCondition}
            AND (o.worker = ? OR o.worker IS NULL)
        ORDER BY o.wday DESC
        `;
        prepared = [industry, sido, Number(bseq)];
    }
    if (industry === "DE") {
        queryStr = "SELECT o.* FROM ams_order o WHERE o.industry = ? ORDER BY o.wday DESC";
        prepared = [industry];
    }
    try {
        const orders = await selectQuery<Order[]>(queryStr, prepared);
        res.json({ success: true, message: orders });
    } catch (error) {
        res.json({ success: false, message: `<api getOrderForB> ${error}` });
    }
}

export async function updateOrder(req: Request, res: Response) {
    const orderSeq = Number(req.body.seq);
    let updateData = req.body.updateData;
    if (typeof updateData === "string") updateData = JSON.parse(updateData);
    const imgFile = req.file;

    const result = await svc.updateOrder(orderSeq, updateData, imgFile);
    res.json({ success: true, message: result });

    //처리 완료시 fcm 알림 전송
    if (updateData.situation === "finish") {
        console.log(`try fcm`);
        try {
            const requesterSeq = result.requester;
            if (requesterSeq) {
                const fcmTokenRows = await getFcmTokenBySeq(requesterSeq);

                if (fcmTokenRows.length > 0 && fcmTokenRows[0].fcmToken) {
                    const fcmToken = fcmTokenRows[0].fcmToken;
                    const title = "주문하신 서비스가 완료되었습니다.";
                    const body = `서비스명: ${result.title}`;
                    const dataPayload = { title, body, type: "finish" };
                    const fcmSendResult = await sendFcmMsg({ token: fcmToken, title, body, data: dataPayload });
                    console.log("FCM send result to customer:", fcmSendResult);
                } else {
                    console.log("no fcmToken");
                }
            } else {
                console.log("no requesterSeq");
            }
        } catch (fcmError) {
            console.error(`Failed to send FCM for order completion ${orderSeq}:`, fcmError);
        }
    }
}

export async function updateAdminOrderCancel(req: Request, res: Response) {
    const { orderSeq } = req.params;
    const result = await svc.updateAdminOrderCancel(+orderSeq);
    res.status(201).json(+result);
    const cancelReadyCount = await getCancelReadyCount();
    sendAdminEvent("SSE_EVENT", { type: "orderCancelReq", data: cancelReadyCount });
}

export async function cancelReqOrder(req: Request, res: Response) {
    const { seq, cancelReason } = req.body;
    const result = await svc.cancelReqOrder(Number(seq), cancelReason);
    res.json({ success: true, message: result });
    const cancelReadyCount = await getCancelReadyCount();
    sendAdminEvent("SSE_EVENT", { type: "orderCancelReq", data: cancelReadyCount });
}

export async function updatePoint(req: Request, res: Response) {
    const { seq, point } = req.body;
    console.log(`seq, point : ${seq}, ${point}`);
    try {
        const result = await modifyQuery("UPDATE ams_order SET point = ? WHERE seq = ?", [point, seq]);
        if (result.affectedRows < 1) throw new Error("update point fail : affectedRows zero");
        res.json({ success: true, message: "update point ok" });
    } catch (err) {
        res.json({ success: false, message: `<api update point> ${err}` });
    }
}

export async function payPoint(req: Request, res: Response) {
    const { orderSeq, industry, descendantName, requesterSeq, point, orderNum, orderTitle } = req.body;
    const defaultPayRate = 0.1;
    const minCommission = 1000;
    let queryStr: string;
    let result: ResultSetHeader;
    try {
        await withTransaction(async (conn) => {
            // order 에 지급 명시
            queryStr = `UPDATE ams_order SET point = ?, payOk = ? WHERE seq = ?`;
            result = await modifyQuery(queryStr, [point, 1, orderSeq], conn);
            if (result.affectedRows < 1) throw new Error("pay point fail : order 에 지급 명시");

            // user 에 point 기록
            queryStr = `UPDATE ams_user SET point = point + ? WHERE seq = ?`;
            result = await modifyQuery(queryStr, [point, requesterSeq], conn);
            if (result.affectedRows < 1) throw new Error("pay point fail : user 에 point 기록");

            // 해당 requester(user) 포인트 검색
            queryStr = `SELECT point FROM ams_user WHERE seq = ?`;
            const pointRows = await selectQuery<SimpleRow<{ point: number }>[]>(queryStr, [requesterSeq], conn);
            if (pointRows.length < 1) throw new Error("pay point fail : 해당 requester 포인트 검색");
            const balance = pointRows[0].point;

            // 포인트 로그 기록
            queryStr = `INSERT INTO ams_point_log 
            (userSeq, utilize, subject, amount, balance)
            VALUES (?, ?, ?, ?, ?)`;
            result = await modifyQuery(
                queryStr,
                [requesterSeq, "받음", `${orderNum} (${orderTitle}) 거래완료`, point, balance],
                conn
            );
            if (result.affectedRows < 1) throw new Error("pay point fail : 포인트 로그 기록");

            //탁송을 제외한 커미션 지급로직
            if (industry !== "DE") {
                //상위 N대 조회
                queryStr = `SELECT ancestorSeq, depth FROM ams_user_closure WHERE descendantSeq = ? AND depth > 0 ORDER BY depth ASC`;
                const ancestorRows = await selectQuery<SimpleRow<{ ancestorSeq: number; depth: number }>[]>(
                    queryStr,
                    [requesterSeq],
                    conn
                );

                if (ancestorRows.length === 0) return;

                const ancestors = Array.from(ancestorRows);
                for (const el of ancestors) {
                    const cms_Rate = new Decimal(defaultPayRate).pow(el.depth);
                    const calculated_cms = new Decimal(point).mul(cms_Rate).toNumber();
                    const final_cms = calculated_cms < minCommission ? minCommission : calculated_cms;

                    //상위 N대 커미션 필드 입력
                    queryStr = `
                    INSERT INTO ams_commission
                    (orderSeq, fromUserSeq, toUserSeq, level, baseAmount, rate, calculateAmount, finalAmount)
                    VALUES(?,?,?,?,?,?,?,?)`;
                    result = await modifyQuery(
                        queryStr,
                        [
                            orderSeq,
                            requesterSeq,
                            el.ancestorSeq,
                            el.depth,
                            point,
                            cms_Rate.toNumber(),
                            calculated_cms,
                            final_cms
                        ],
                        conn
                    );
                    if (result.affectedRows < 1) throw new Error("pay point fail : 상위 N대 커미션필드 입력");

                    //상위 N대 포인트 로그의 최근 잔액 찾기
                    queryStr = `SELECT balance FROM ams_point_log WHERE userSeq = ? ORDER BY wday DESC LIMIT 1`;
                    const balanceRows = await selectQuery<SimpleRow<{ balance: number }>[]>(
                        queryStr,
                        [el.ancestorSeq],
                        conn
                    );
                    const ancestorBalance = balanceRows.length > 0 ? balanceRows[0].balance || 0 : 0;
                    //상위 N대 포인트로그 기록
                    queryStr = `INSERT INTO ams_point_log
                    (userSeq, utilize, subject, amount, balance)
                    VALUES(?,?,?,?,?)`;
                    result = await modifyQuery(
                        queryStr,
                        [
                            el.ancestorSeq,
                            "받음",
                            `${orderNum} (${orderTitle}) ${el.depth}대 자손(${descendantName}) 커미션`,
                            final_cms,
                            final_cms + ancestorBalance
                        ],
                        conn
                    );
                    if (result.affectedRows < 1) throw new Error("pay point fail : 상위 N대 포인트로그 입력");

                    //상위 N대 유저 포인트 기록
                    queryStr = `UPDATE ams_user SET point = ? WHERE seq = ?`;
                    result = await modifyQuery(queryStr, [final_cms + ancestorBalance, el.ancestorSeq], conn);
                    if (result.affectedRows < 1) throw new Error("pay point fail : 상위 N대 유저 포인트 입력");
                }
            }
        });
        res.json({ success: true, message: `ok` });
    } catch (err) {
        res.json({ success: false, message: `<api pay point> ${err}` });
    }
}

export async function deleteOrder(req: Request, res: Response) {
    const { ids } = req.body as { ids: number[] };

    if (!Array.isArray(ids) || ids.length === 0) {
        return res.json({ success: false, message: "ids required" });
    }

    try {
        await executeWithRety(async () => {
            return await withTransaction(async (conn) => {
                const placeholders = ids.map(() => "?").join(",");
                const queryStr = `DELETE FROM ams_order WHERE seq IN (${placeholders})`;
                const result = await modifyQuery(queryStr, ids, conn);
                if (result.affectedRows < 1) throw new Error("삭제 실패");
                return result;
            });
        });
        res.status(201).json({ success: true, message: "del ok" });
    } catch (error) {
        res.status(500).json({ success: false, message: `<api deleteOrder> ${error}` });
    }
}

export async function deleteOrderBySeq(req: Request, res: Response) {
    const { orderSeq } = req.params;
    const result = await svc.deleteOrderBySeq(Number(orderSeq));
    res.json({ success: true, message: result });
}

export async function taxInvoice(req: Request, res: Response) {
    const { ids } = req.body as { ids: number[] };

    if (!Array.isArray(ids) || ids.length === 0) {
        return res.json({ success: false, message: "ids required" });
    }

    try {
        await executeWithRety(async () => {
            return await withTransaction(async (conn) => {
                const placeholders = ids.map(() => "?").join(",");
                const queryStr = `UPDATE ams_order SET taxInvoice = NOW() WHERE seq IN (${placeholders})`;
                const result = await modifyQuery(queryStr, ids, conn);
                if (result.affectedRows < 1) throw new Error("세금계산서 발행여부 업데이트 실패");
                return result;
            });
        });
        res.json({ success: true, message: "taxInvoice ok" });
    } catch (error) {
        res.json({ success: false, message: `<api taxInvoice> ${error}` });
    }
}

export async function deposit(req: Request, res: Response) {
    const { ids } = req.body as { ids: number[] };

    if (!Array.isArray(ids) || ids.length === 0) {
        return res.json({ success: false, message: "ids required" });
    }

    try {
        await executeWithRety(async () => {
            return await withTransaction(async (conn) => {
                const placeholders = ids.map(() => "?").join(",");
                const queryStr = `UPDATE ams_order SET deposit = NOW() WHERE seq IN (${placeholders})`;
                const result = await modifyQuery(queryStr, ids, conn);
                if (result.affectedRows < 1) throw new Error("입금여부 등록 실패");
                return result;
            });
        });
        res.json({ success: true, message: "deposit ok" });
    } catch (error) {
        res.json({ success: false, message: `<api deposit> ${error}` });
    }
}
