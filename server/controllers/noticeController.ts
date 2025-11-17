import { Request, Response } from "express";
import { modifyQuery, selectQuery } from "@connect/query.js";
import { NoticeList } from "@models/NoticeList.js";

export async function getNotice(req: Request, res: Response): Promise<void> {
    try {
        const result = await selectQuery<NoticeList[]>(
            `SELECT * FROM notice_proto ORDER BY seq DESC`
        );
        res.json({ success: true, message: result });
    } catch (error) {
        res.json({ success: false, message: `noticeController - getList error : ${error}` });
    }
}

export async function insertNotice(req: Request, res: Response): Promise<void> {
    const { title, content, writer } = req.body;
    try {
        const result = await modifyQuery(
            `INSERT INTO notice_proto (title, body, writer) VALUES (?, ?, ?)`,
            [title, content, writer]
        );
        if (result.affectedRows < 1) throw new Error('no insert affected');
        res.json({ success: true, message: result });
    } catch (error) {
        res.json({ success: false, message: `noticeController - insertNotice error : ${error}` });
    }
}