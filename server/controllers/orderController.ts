import { Request, Response } from "express";
import { modifyQuery, selectQuery, withTransaction, executeWithRety } from "@connect/query.js";
import { Order, OrderWithWorker } from "@models/Order.js";
import { SimpleRow } from "@models/SimpleRow.js";
import { sendFcmMsg } from "@connect/fcm.js";
import { json } from "stream/consumers";

const selectQueryForC = `
    SELECT 
    o.*, w.company as workerCompany, w.phone as workerPhone
    FROM ams_order o
    JOIN ams_user u ON o.requester = u.seq 
    LEFT JOIN ams_user w ON o.worker = w.seq
    WHERE o.requester = ? ORDER BY o.wday DESC
`;
const selectQueryForFx = `
    SELECT o.* 
    FROM ams_order o 
    WHERE o.industry = ? 
    AND o.sido = ? AND o.sigungu = ? AND (o.worker = ? OR o.worker IS NULL)
    ORDER BY o.wday DESC
`;
const selectQueryForAllLocation = `
    SELECT o.* 
    FROM ams_order o 
    WHERE o.industry = ? AND (o.worker = ? OR o.worker IS NULL)
    ORDER BY o.wday DESC
`;

async function insertSingleOrder(order: Record<string, any>) {
    return executeWithRety(async () => {
        return await withTransaction(async (conn) => {
            const columns = Object.keys(order);
            const values: any[] = Object.values(order);
            if (values.length === 0) throw new Error('Insert Values are empty');
            const placeholders = values.map(() => '?').join(', ');
            const queryStr = `INSERT INTO ams_order (${columns.join(",")}) VALUES(${placeholders})`;
            const result = await modifyQuery(queryStr, values, conn);
            if (result.affectedRows < 1) throw new Error('insert fail');
            return true;
        });
    });
}

export async function insertOrder(req: Request, res: Response) {
    const results: { index: number; success: boolean; error?: string }[] = [];
    const orderDatas = req.body;
    try {
        if (!Array.isArray(orderDatas)) throw new Error('Request body must be an array');

        for (let i = 0; i < orderDatas.length; i++) {
            try {
                await insertSingleOrder(orderDatas[i]);
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
                let where = '';
                let prepared: any[] = [];
                if (industry === 'FX') {
                    where = `type='b' AND industry = ? AND sido = ? AND sigungu = ?`;
                    prepared = [industry, sido, sigungu];
                } else {
                    where = `type='b' AND industry = ?`;
                    prepared = [industry];
                }

                const fcmTokenRows = await selectQuery<SimpleRow<{ fcmToken: string }>[]>(
                    `SELECT fcmToken FROM ams_user WHERE ${where} AND fcmToken IS NOT NULL AND fcmToken != ''`,
                    [prepared].flat()
                );

                if (fcmTokenRows.length > 0 && fcmTokenRows[0].fcmToken) {
                    const fcmToken = fcmTokenRows[0].fcmToken;
                    const title = '새로운 주문이 접수되었습니다.';
                    const body = `주문 내용: ${orderData.title}`;
                    const dataPayload = { title, body, type: 'wait' };
                    const fcmSendResult = await sendFcmMsg({ token: fcmToken, title, body, data: dataPayload });
                    console.log('FCM send result to businesses:', fcmSendResult);
                }
            } catch (fcmError) {
                console.error(`Failed to send FCM for order ${orderData.requester}:`, fcmError);
            }
        }
    } catch (error) {
        res.json({ success: false, message: `<api insertOrder> ${error}` });
    }
}

export async function getOrderForC(req: Request, res: Response) {
    const { userSeq } = req.params;
    try {
        const orders = await selectQuery<OrderWithWorker[]>(selectQueryForC, [Number(userSeq)]);
        res.json({ success: true, message: orders });
    } catch (error) {
        res.json({ success: false, message: `<api getOrderForC> ${error}` });
    }
}

export async function getOrderForB(req: Request, res: Response) {
    const { bseq, industry, sido, sigungu } = req.params;
    console.log('getOrderForB : ', bseq, industry, sido, sigungu);
    let queryStr = '';
    let prepared: any[] = [];
    if (industry === 'FX') {
        queryStr = selectQueryForFx;
        prepared = [industry, sido, sigungu, bseq];
    }
    if (industry === 'RT' || industry === 'DE') {
        queryStr = selectQueryForAllLocation;
        prepared = [industry, bseq];
    }
    try {
        const orders = await selectQuery<Order[]>(queryStr, prepared);
        res.json({ success: true, message: orders });
    } catch (error) {
        res.json({ success: false, message: `<api getOrderForB> ${error}` });
    }
}

export async function updateOrder(req: Request, res: Response) {

    let { seq, updateData } = req.body;
    const imgFile = req.file;
    if (imgFile) {
        updateData = JSON.parse(updateData);
        updateData.img = `/uploads/${imgFile.filename}`;
    }
    updateData.fday = new Date();

    console.log('updateOrder : ', seq, updateData);
    console.log('typeof seq : ', typeof seq);
    console.log('typeof updateData : ', typeof updateData);
    console.log('imgFileName : ', imgFile?.filename);

    const columns = Object.keys(updateData);
    const values: any[] = Object.values(updateData);
    const placeholders = columns.map(col => `${col} = ?`).join(', ');
    try {
        const queryStr = `UPDATE ams_order SET ${placeholders} WHERE seq = ?`;
        const result = await modifyQuery(queryStr, [...values, Number(seq)]);
        if (result.affectedRows < 1) throw new Error('update fail');
        const updatedOrder = await selectQuery<Order[]>(`SELECT * FROM ams_order WHERE seq = ?`, [Number(seq)]);
        res.json({ success: true, message: updatedOrder[0] });
    } catch (error) {
        res.json({ success: false, message: `<api updateOrder> ${error}` });
    }
}
