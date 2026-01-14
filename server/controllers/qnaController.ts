import { Request, Response } from "express";
import { modifyQuery, selectQuery } from "@connect/query.js";
import { Qna } from "@models/Qna.js";

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

export async function insertQna(req: Request, res: Response): Promise<void> {
    try {
        const { title, question, writer } = req.body;
        const result = await modifyQuery(
            `INSERT INTO ams_qna (title, question, writer) VALUES (?, ?, ?)`,
            [title, question, writer]
        );
        if (result.affectedRows < 1) throw new Error('no insert affected');
        res.json({ success: true, message: 'insertOK' });
    } catch (error) {
        res.json({ success: false, message: `insertQna error : ${error}` });
    }
}

export async function updateAnswer(req: Request, res: Response): Promise<void> {
    try {
        const { seq, answer } = req.body;
        const result = await modifyQuery(
            `UPDATE ams_qna SET answer = ? WHERE seq = ?`,
            [answer, seq]
        );
        if (result.affectedRows < 1) throw new Error('no update answer');
        res.json({ success: true, message: 'updateAnswer OK' });
    } catch (error) {
        res.json({ success: false, message: `updateAnswer error : ${error}` });
    }
}
