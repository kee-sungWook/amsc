import { Request, Response } from "express";
import { modifyQuery, selectQuery } from "@connect/query.js";
import { Qna } from "@models/Qna.js";
import { SimpleRow } from "@models/SimpleRow.js";
import { sendAdminEvent } from "./sseController.js";

export async function getQna(req: Request, res: Response): Promise<void> {
    try {
        const { seq } = req.params;
        const result = await selectQuery<Qna[]>(
            `SELECT * FROM ams_qna WHERE writer = ? ORDER BY seq DESC`,
            [seq]
        );
        res.json({ success: true, message: result });
    } catch (error) {
        res.json({ success: false, message: `getQna error : ${error}` });
    }
}

export async function getQnaAll(_: Request, res: Response): Promise<void> {
    try {
        const queryStr = `SELECT * FROM ams_qna ORDER BY seq DESC`;
        const result = await selectQuery<Qna[]>(queryStr);
        res.json({ success: true, message: result });
    } catch (error) {
        res.json({ success: false, message: `getQna error : ${error}` });
    }
}

export async function insertQna(req: Request, res: Response): Promise<void> {
    try {
        const { title, question, writer } = req.body;
        const result = await modifyQuery(
            `INSERT INTO ams_qna (title, question, writer) VALUES (?, ?, ?)`,
            [title, question, writer]
        );
        if (result.affectedRows < 1) throw new Error('no insert affected');
        res.json({ success: true, message: 'insertOK' });

        const queryStr = `SELECT COUNT(*) as cnt FROM ams_qna WHERE answer IS NULL OR answer = ''`;
        const [result2] = await selectQuery<SimpleRow<{ cnt: number }>[]>(queryStr);
        sendAdminEvent("SSE_EVENT", { type: 'qna', data: result2.cnt });
    } catch (error) {
        res.json({ success: false, message: `insertQna error : ${error}` });
    }
}

export async function updateAnswer(req: Request, res: Response): Promise<void> {
    try {
        const { qnaSeq, answerStr } = req.body;
        let queryStr = `UPDATE ams_qna SET answer = ?, aday = ? WHERE seq = ?`;
        const updateResult = await modifyQuery(queryStr, [answerStr, new Date(), qnaSeq]);
        if (updateResult.affectedRows < 1) throw new Error('no update answer');

        queryStr = `SELECT * FROM ams_qna WHERE seq = ?`;
        const [selectResult] = await selectQuery<Qna[]>(queryStr, [qnaSeq]);

        res.json({ success: true, message: selectResult });

        queryStr = `SELECT COUNT(*) as cnt FROM ams_qna WHERE answer IS NULL OR answer = ''`;
        const [result] = await selectQuery<SimpleRow<{ cnt: number }>[]>(queryStr);
        sendAdminEvent("SSE_EVENT", { type: 'qna', data: result.cnt });
    } catch (error) {
        res.json({ success: false, message: `updateAnswer error : ${error}` });
    }
}
