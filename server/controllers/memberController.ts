import { Request, Response } from "express";
import { selectQuery } from "@connect/query.js";
import { User } from "@models/User.js";


export async function adminLogin(req: Request, res: Response) {
    try {
        const { memId, memPw } = req.body;
        const memRow = await selectQuery<User[]>(
            'SELECT * FROM ams_member WHERE id = ? AND pw = ? AND type= ?',
            [memId, memPw, 'a']
        );
        if (memRow.length < 1) res.json({ success: false, message: 'no member' });
        else res.json({ success: true, message: memRow[0] });
    } catch (err) {
        console.error(`[memberLogin err] ${err}`);
        res.json({ success: false, message: `[api memberLogin err] ${err}` });
    }
}

