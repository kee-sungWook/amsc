import { Request, Response } from "express";
import { modifyQuery, selectQuery } from "@connect/query.js";
import { User } from "@models/User.js";
import { RowDataPacket } from "mysql2";
import { SimpleRow } from "@models/SimpleRow";

const commonSelectQueryStr =
    `SELECT 
    seq, 
    type, 
    IFNULL(industry, '') as industry,
    IFNULL(service, '') as service,
    id,
    IFNULL(name, '') as name,
    IFNULL(email, '') as email,
    phone,
    IFNULL(company, '') as company,
    IFNULL(businessNum, '') as businessNum,
    IFNULL(fcmToken, '') as fcmToken,
    IFNULL(addr1, '') as addr1,
    IFNULL(addr2, '') as addr2,
    IFNULL(sido, '') as sido,
    IFNULL(sigungu, '') as sigungu,
    IFNULL(addrX, '') as addrX,
    IFNULL(addrY, '') as addrY,
    point,
    jday
    FROM ams_user WHERE seq = ?`;

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
        const {
            type,
            industry,
            service,
            id,
            passW,
            name,
            email,
            phone,
            company,
            businessNum,
            fcmToken,
            addr1,
            addr2,
            sido,
            sigungu,
            addrX,
            addrY
        } = req.body;

        //회원정보 입력
        let query = `
        INSERT INTO ams_user 
        (type, industry, service, id, pw, name, email, phone, company, businessNum, fcmToken, addr1, addr2, sido, sigungu, addrX, addrY) 
        VALUES
        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        `;
        const insertResult = await modifyQuery(query, [
            type ?? 'b',
            industry ?? '',
            service ?? '',
            id,
            passW,
            name,
            email ?? '',
            phone,
            company ?? '',
            businessNum ?? '',
            fcmToken ?? '',
            addr1 ?? '',
            addr2 ?? '',
            sido ?? '',
            sigungu ?? '',
            addrX ?? '',
            addrY ?? ''
        ]);
        if (insertResult.affectedRows < 1) throw new Error('insert fail');
        const insertId = insertResult.insertId;

        //회원관계도 입력
        query = "INSERT INTO ams_user_closure (ancestorSeq, descendantSeq, depth) VALUES (?, ?, ?)"
        const closureResult = await modifyQuery(query, [insertId, insertId, 0]);
        if (closureResult.affectedRows < 1) throw new Error('회원관계 입력 실패');

        //입력된 회원정보 전송
        const row = await selectQuery<User[]>(commonSelectQueryStr, [insertId]);
        if (row.length < 1) throw new Error('select fail after insert');
        const { pw, ...userData } = row[0];
        res.json({ success: true, message: userData });
    } catch (error) {
        res.json({ success: false, message: `<api user join> ${error}` });
    }
}

export async function joinNetwork(req: Request, res: Response) {
    try {
        const { managerId, userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu } = req.body;

        //회원정보 입력
        let query = 'INSERT INTO ams_user (type, industry, id, pw, name, email, phone, sido, sigungu) VALUES(?,?,?,?,?,?,?,?,?)';
        const insertResult = await modifyQuery(query, ['y', userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu]);
        if (insertResult.affectedRows < 1) throw new Error('insert fail');
        const insertId = insertResult.insertId;

        //매니저 seq 찾기
        query = 'SELECT seq FROM ams_user WHERE id = ?';
        const managerSeqResult = await selectQuery<SimpleRow<{ seq: number }>[]>(query, [managerId]);
        if (managerSeqResult.length < 1) throw new Error('select fail managerSeq');
        const ancestorSeq = managerSeqResult[0].seq;

        //회원관계도 입력
        query = `
        INSERT INTO ams_user_closure (ancestorSeq, descendantSeq, depth) 
        SELECT ancestorSeq, ?, depth + 1
        FROM ams_user_closure
        WHERE descendantSeq = ?
        `;
        const closureResult = await modifyQuery(query, [insertId, ancestorSeq]);
        if (closureResult.affectedRows < 1) throw new Error('회원관계 입력 실패');

        //입력된 회원정보 전송
        const row = await selectQuery<User[]>(commonSelectQueryStr, [insertId]);
        if (row.length < 1) throw new Error('select fail after insert');
        const { pw, ...userData } = row[0];
        res.json({ success: true, message: userData });
    } catch (error) {
        res.json({ success: false, message: `<api user joinNetwork> ${error}` });
    }
}

export async function joinBusiness(req: Request, res: Response) {
    try {
        const { userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu } = req.body;

        //회원정보 입력
        let query = 'INSERT INTO ams_user (type, industry, id, pw, name, email, phone, sido, sigungu) VALUES(?,?,?,?,?,?,?,?,?)';
        const insertResult = await modifyQuery(query, ['y', userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu]);
        if (insertResult.affectedRows < 1) throw new Error('insert fail');
        const insertId = insertResult.insertId;

        //회원관계도 입력
        query = "INSERT INTO ams_user_closure (ancestorSeq, descendantSeq, depth) VALUES (?, ?, ?)"
        const closureResult = await modifyQuery(query, [insertId, insertId, 0]);
        if (closureResult.affectedRows < 1) throw new Error('회원관계 입력 실패');

        //입력된 회원정보 전송
        const row = await selectQuery<User[]>(commonSelectQueryStr, [insertId]);
        if (row.length < 1) throw new Error('select fail after insert');
        const { pw, ...userData } = row[0];
        res.json({ success: true, message: userData });
    } catch (error) {
        res.json({ success: false, message: `<api user joinBusiness> ${error}` });
    }
}

export async function updateField(req: Request, res: Response) {
    try {
        const { seq, updateData } = req.body;
        console.log('updateField : ', seq, updateData);
        const columns = Object.keys(updateData);
        const values: any[] = Object.values(updateData);
        const placeholders = columns.map(col => `${col} = ?`).join(', ');
        const query = `UPDATE ams_user SET ${placeholders} WHERE seq = ?`;
        const updateResult = await modifyQuery(query, [...values, seq]);
        if (updateResult.affectedRows < 1) throw new Error('fail');

        const row = await selectQuery<User[]>(commonSelectQueryStr, [seq]);
        if (row.length < 1) throw new Error('select fail after insert');
        res.json({ success: true, message: row[0] });
    } catch (error) {
        res.json({ success: false, message: `<api user updateField> ${error}` });
    }
}
