import { Request, Response } from "express";
import { modifyQuery, selectQuery } from "@connect/query.js";
import { User } from "@models/User.js";
import type { FeeRateModel, LocalModel, Member } from "@models/Member.js";
import { RowDataPacket } from "mysql2";


export async function adminLogin(req: Request, res: Response) {
    try {
        const { memId, memPw } = req.body;
        const memRow = await selectQuery<User[]>(
            'SELECT * FROM ams_member WHERE id = ? AND pw = ? AND type= ?',
            [memId, memPw, 'a']
        );
        if (memRow.length === 0) res.json({ success: false, message: 'no member' });
        else res.json({ success: true, message: memRow[0] });
    } catch (err) {
        console.error(`[memberLogin err] ${err}`);
        res.json({ success: false, message: `[api memberLogin err] ${err}` });
    }
}


export async function getMembers(): Promise<Member[]> {
    const rows = await selectQuery<Member[]>(
        `SELECT
        m.seq, m.industry, m.service, m.id, m.name, m.email, m.phone, m.company, m.businessNum, m.addr1, m.addr2, m.jday,
        (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'seq', f.seq, 
                'memSeq', f.memSeq, 
                'feeName', f.feeName, 
                'feeRate', f.feeRate
            )
        ) FROM ams_feerate f WHERE f.memSeq = m.seq) AS feeRate,
        (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'seq', l.seq, 
                'memSeq', l.memSeq, 
                'localName', l.localName, 
                'localCode', l.localCode
            )
        ) FROM ams_local l WHERE l.memSeq = m.seq) AS local
        FROM ams_member m 
        WHERE m.type != 'a'
        ORDER BY m.jday DESC`,
    );

    return rows.map(row => ({
        ...row,
        feeRate: typeof row.feeRate === 'string' ? JSON.parse(row.feeRate) : (row.feeRate || []),
        local: typeof row.local === 'string' ? JSON.parse(row.local) : (row.local || []),
    }));
}


export async function getMemberBySeq(memSeq: number): Promise<Member> {
    const rows = await selectQuery<Member[]>(
        `SELECT
        m.seq, m.industry, m.service, m.id, m.name, m.email, m.phone, m.company, m.businessNum, m.addr1, m.addr2, m.jday,
        (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'seq', f.seq, 
                'memSeq', f.memSeq, 
                'feeName', f.feeName, 
                'feeRate', f.feeRate
            )
        ) FROM ams_feerate f WHERE f.memSeq = m.seq) AS feeRate,
        (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'seq', l.seq, 
                'memSeq', l.memSeq, 
                'localName', l.localName, 
                'localCode', l.localCode
            )
        ) FROM ams_local l WHERE l.memSeq = m.seq) AS local
        FROM ams_member m 
        WHERE m.seq = ?`,
        [memSeq]
    );

    const result = rows.map(row => ({
        ...row,
        feeRate: typeof row.feeRate === 'string' ? JSON.parse(row.feeRate) : (row.feeRate || []),
        local: typeof row.local === 'string' ? JSON.parse(row.local) : (row.local || []),
    }));
    return result[0];
}


export async function getMemFeeRates(memSeq: number): Promise<FeeRateModel[]> {
    const row = await selectQuery<(FeeRateModel & RowDataPacket)[]>(
        `SELECT * FROM ams_feerate WHERE memSeq = ?`,
        [memSeq]
    );
    return row;
}


export async function insertMemFeeRate(reqBody: any): Promise<FeeRateModel[]> {
    const { memSeq, feeName, feeRate } = reqBody;
    try {
        await modifyQuery(
            `INSERT INTO ams_feerate (memSeq, feeName, feeRate) VALUES (?, ?, ?)`,
            [Number(memSeq), feeName, Number(feeRate)]
        );
        const newData = await selectQuery<(FeeRateModel & RowDataPacket)[]>(
            `SELECT * FROM ams_feerate WHERE memSeq = ?`,
            [Number(memSeq)]
        );
        return newData;
    } catch (err) {
        throw err;
    }
}


export async function updateMemFeeRate(reqBody: any): Promise<FeeRateModel[]> {
    const { seq, memSeq, feeName, feeRate } = reqBody;
    try {
        await modifyQuery(
            `UPDATE ams_feerate SET feeName = ?, feeRate = ? WHERE seq = ?`,
            [feeName, feeRate, Number(seq)],
        );
        const updateData = await selectQuery<(FeeRateModel & RowDataPacket)[]>(
            `SELECT * FROM ams_feerate WHERE memSeq = ?`,
            [Number(memSeq)]
        );
        return updateData;
    } catch (err) {
        throw err;
    }
}


export async function deleteMemFeeRate(seq: number): Promise<boolean> {
    const result = await modifyQuery(
        `DELETE FROM ams_feerate WHERE seq = ?`,
        [seq]
    );
    return result.affectedRows > 0;
}


export async function insertMemLocal(reqBody: any): Promise<LocalModel[]> {
    const { memSeq, localName, localCode } = reqBody;
    await modifyQuery(
        `INSERT INTO ams_local SET memSeq = ?, localName = ?, localCode = ?`,
        [memSeq, localName, localCode]
    );
    const newData = await selectQuery<(LocalModel & RowDataPacket)[]>(
        `SELECT * FROM ams_local WHERE memSeq = ?`,
        [memSeq]
    );
    return newData;
}


export async function updateMemlocal(reqBody: any): Promise<FeeRateModel[]> {
    const { seq, memSeq, localName, localCode } = reqBody;
    try {
        await modifyQuery(
            `UPDATE ams_local SET localName = ?, localCode = ? WHERE seq = ?`,
            [localName, localCode, Number(seq)],
        );
        const updateData = await selectQuery<(FeeRateModel & RowDataPacket)[]>(
            `SELECT * FROM ams_local WHERE memSeq = ?`,
            [Number(memSeq)]
        );
        return updateData;
    } catch (err) {
        throw err;
    }
}


export async function deleteMemlocal(seq: number): Promise<boolean> {
    const result = await modifyQuery(
        `DELETE FROM ams_local WHERE seq = ?`,
        [seq]
    );
    return result.affectedRows > 0;
}
