import { Request, Response } from "express";
import { modifyQuery, selectQuery } from "@connect/query.js";
import { Member } from "@models/Member.js";

export async function checkValid(req: Request, res: Response) {
    try {
        const { memberId } = req.params;
        const query = 'SELECT * FROM ams_member WHERE id = ?';
        const row = await selectQuery<Member[]>(query, [memberId]);
        if (row.length < 1) throw new Error('no user');
        res.json({ success: true, message: 'id' });
    } catch (error) {
        res.json({ success: false, message: `<api member checkValid> ${error}` });
    }
}

export async function signIn(req: Request, res: Response) {
    try {
        const { memberId, memberPw } = req.body;
        const query = 'SELECT * FROM ams_member WHERE id = ? AND pw = ?';
        const row = await selectQuery<Member[]>(query, [memberId, memberPw]);
        if (row.length < 1) throw new Error('no member');
        res.json({ success: true, message: row[0] });
    } catch (error) {
        res.json({ success: false, message: `<api member singIn> ${error}` });
    }
}

export async function join(req: Request, res: Response) {
    try {
        const { memberId, memberPw, memberName, memberEmail, memberPhone } = req.body;
        let query = 'INSERT INTO ams_member (id, pw, name, email, phone) VALUES(?,?,?,?,?)';
        const insertResult = await modifyQuery(query, [memberId, memberPw, memberName, memberEmail, memberPhone]);
        if (insertResult.affectedRows < 1) throw new Error('insert fail');
        const insertId = insertResult.insertId;

        query = `SELECT 
        seq, 
        type, 
        IFNULL(reference, '') as reference,
        id,
        IFNULL(name, '') as name,
        IFNULL(email, '') as email,
        phone,
        IFNULL(company, '') as company,
        IFNULL(businessName, '') as businessName,
        jday
        FROM ams_member WHERE seq = ?`;
        const row = await selectQuery<Member[]>(query, [insertId]);
        if (row.length < 1) throw new Error('select fail after insert');
        const { pw, ...memberData } = row[0];
        res.json({ success: true, message: memberData });
    } catch (error) {
        res.json({ success: false, message: `<api member join> ${error}` });
    }
}