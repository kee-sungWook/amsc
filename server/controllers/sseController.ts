import { selectQuery } from "@connect/query.js";
import { SimpleRow } from "@models/SimpleRow.js";
import { Request, Response } from "express";

let adminSseRes: Response | null = null;

setInterval(() => {
    if (!adminSseRes) return;
    const payload =
        `event: ping\n` +
        `data: {}\n\n`;
    adminSseRes.write(payload);
}, 30000); // 30초

export function adminSseConnect(req: Request, res: Response) {
    console.log(`adminSseConnect`);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    adminSseRes = res;
    const payload =
        `event: SSE_EVENT\n` +
        `data: ${JSON.stringify({ connected: true })}\n\n`;
    res.write(payload);

    req.on("close", () => {
        adminSseRes = null;
    });
}

export function sendAdminEvent(event: string, data: any) {
    console.log(`sendAdminEvent`);
    if (!adminSseRes) return;
    const payload =
        `event: ${event}\n` +
        `data: ${JSON.stringify(data)}\n\n`;
    adminSseRes.write(payload);
}

export async function adminSseFirstReceive(_: Request, res: Response) {
    try {
        const data = await getPayloadData();
        console.log('adminSseFirstReceive data', data);
        res.json({ success: true, message: data });
    } catch (err) {
        console.error(`<api adminSseFirstReceive> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}

async function getPayloadData(): Promise<{ qna: number, withdrawal: number }> { //답변 미완료 qna 수량, 출금요청중 포인트로그 수량 얻기
    try {
        let queryStr = `SELECT COUNT(*) as cnt FROM ams_qna WHERE answer IS NULL OR answer = ''`;
        let [result] = await selectQuery<SimpleRow<{ cnt: number }>[]>(queryStr);
        const qnaNum: number = result.cnt;

        queryStr = `SELECT COUNT(*) as cnt FROM ams_point_log WHERE utilize = ?`;
        [result] = await selectQuery<SimpleRow<{ cnt: number }>[]>(queryStr, ['출금요청']);
        const withdrawalNum: number = result.cnt;

        return { qna: qnaNum, withdrawal: withdrawalNum };

    } catch (err) {
        console.error(`<api getPayloadData> ${err}`);
        throw err;
    }
}