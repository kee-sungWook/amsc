import { Request, Response } from "express";
import { modifyQuery, selectQuery } from "@connect/query.js";
import { User } from "@models/User.js";

export async function checkValid(req: Request, res: Response) {
    try {
        const { userId } = req.params;
        const query = 'SELECT * FROM ams_user WHERE id = ?';
        const row = await selectQuery<User[]>(query, [userId]);
        if (row.length < 1) throw new Error('no user');
        res.json({ success: true, message: 'id' });
    } catch (error) {
        res.json({ success: false, message: `<api user checkValid> ${error}` });
    }
}

export async function signIn(req: Request, res: Response) {
    try {
        const { userId, userPw } = req.body;
        const query = 'SELECT * FROM ams_user WHERE id = ? AND pw = ?';
        const row = await selectQuery<User[]>(query, [userId, userPw]);
        if (row.length < 1) throw new Error('no user');
        res.json({ success: true, message: row[0] });
    } catch (error) {
        res.json({ success: false, message: `<api user signIn> ${error}` });
    }
}

export async function join(req: Request, res: Response) {
    try {
        const { userId, userPw, userName, userEmail, userPhone } = req.body;
        let query = 'INSERT INTO ams_user (id, pw, name, email, phone) VALUES(?,?,?,?,?)';
        const insertResult = await modifyQuery(query, [userId, userPw, userName, userEmail, userPhone]);
        if (insertResult.affectedRows < 1) throw new Error('insert fail');
        const insertId = insertResult.insertId;

        query = `SELECT 
        seq, 
        type, 
        IFNULL(manager, '') as manager,
        id,
        IFNULL(name, '') as name,
        IFNULL(email, '') as email,
        phone,
        jday
        FROM ams_user WHERE seq = ?`;
        const row = await selectQuery<User[]>(query, [insertId]);
        if (row.length < 1) throw new Error('select fail after insert');
        const { pw, ...userData } = row[0];
        res.json({ success: true, message: userData });
    } catch (error) {
        res.json({ success: false, message: `<api user join> ${error}` });
    }
}