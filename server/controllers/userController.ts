import { Request, Response } from "express";
import { executeWithRety, modifyQuery, selectQuery, withTransaction } from "@connect/query.js";
import { Minion, User, UserWithP } from "@models/User.js";
import { SimpleRow } from "@models/SimpleRow.js";
import { PointLog, Withdrawal } from "@models/PointLog.js";
import { sendAdminEvent } from "./sseController.js";

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
        console.log('signIn : ', userId, userPw);
        const query = 'SELECT * FROM ams_user WHERE id = ? AND pw = ?';
        const row = await selectQuery<User[]>(query, [userId, userPw]);
        if (row.length < 1) throw new Error('no user');
        res.json({ success: true, message: row[0] });
    } catch (error) {
        res.json({ success: false, message: `<api user signIn> ${error}` });
    }
}

export async function getPoint(req: Request, res: Response) {
    try {
        const { userSeq } = req.params;
        const query = 'SELECT point FROM ams_user WHERE seq = ?';
        const row = await selectQuery<SimpleRow<{ point: number }>[]>(query, [userSeq]);
        if (row.length < 1) throw new Error('no user');
        res.json({ success: true, message: row[0] });
    } catch (error) {
        res.json({ success: false, message: `<api user signIn> ${error}` });
    }
}

export async function getAllUsers(req: Request, res: Response) {
    try {
        const queryStr = `SELECT u.*,
        IFNULL(c.childCount, 0) AS childCount,
        IFNULL(c.descendantCount, 0) AS descendantCount,
        IFNULL(o.activeOrderCount, 0) AS activeOrderCount,
        IFNULL(o.payReadyCount, 0) AS payReadyCount
        FROM ams_user u 
        LEFT JOIN (
            SELECT 
            ancestorSeq, 
            COUNT(CASE WHEN depth = 1 THEN 1 END) AS childCount,
            COUNT(CASE WHEN depth >= 2 THEN 1 END) AS descendantCount
            FROM ams_user_closure GROUP BY ancestorSeq
        ) c
        ON u.seq = c.ancestorSeq
        LEFT JOIN (
            SELECT 
            requester,
            COUNT(CASE WHEN situation != 'finish' THEN 1 END) AS activeOrderCount,
            COUNT(CASE WHEN situation = 'finish' AND payOk = 0 THEN 1 END) AS payReadyCount
            FROM ams_order GROUP BY requester
        ) o
        ON u.seq = o.requester
        ORDER BY u.jday DESC`;
        const users = await selectQuery<UserWithP[]>(queryStr);
        res.json({ success: true, message: users });
    } catch (err) {
        console.error(`getAllUsers err: ${err}`);
        res.json({ success: false, message: `getAllUsers err: ${err}` });
    }
}

export async function join(req: Request, res: Response) {
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
    try {
        const newUserData = await withTransaction(async (conn) => {
            //회원정보 입력
            let query = `
        INSERT INTO ams_user 
        (type, industry, service, id, pw, name, email, phone, company, businessNum, fcmToken, addr1, addr2, sido, sigungu, addrX, addrY) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
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
            ], conn);
            if (insertResult.affectedRows < 1) throw new Error('insert fail');
            const newUserSeq = insertResult.insertId;

            //회원관계도 입력
            query = "INSERT INTO ams_user_closure (ancestorSeq, descendantSeq, depth) VALUES (?, ?, ?)"
            const closureResult = await modifyQuery(query, [newUserSeq, newUserSeq, 0], conn);
            if (closureResult.affectedRows < 1) throw new Error('회원관계 입력 실패');

            //입력된 회원정보 전송
            const row = await selectQuery<User[]>(commonSelectQueryStr, [newUserSeq], conn);
            if (row.length < 1) throw new Error('select fail after insert');
            const { pw, ...userData } = row[0];
            return userData;
        });
        res.json({ success: true, message: newUserData });
    } catch (error) {
        res.json({ success: false, message: `<api user join> ${error}` });
    }
}

export async function joinNetwork(req: Request, res: Response) {
    const { managerId, userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu } = req.body;
    try {
        const newUserData = await withTransaction(async (conn) => {
            //가입자 정보 입력
            let query = 'INSERT INTO ams_user (type, industry, id, pw, name, email, phone, sido, sigungu) VALUES(?,?,?,?,?,?,?,?,?)';
            const insertResult = await modifyQuery(query, ['y', userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu], conn);
            if (insertResult.affectedRows < 1) throw new Error('insert fail');
            const newUserSeq = insertResult.insertId;

            //가입자 자체 회원관계도 입력
            query = "INSERT INTO ams_user_closure (ancestorSeq, descendantSeq, depth) VALUES (?, ?, ?)"
            const selfResult = await modifyQuery(query, [newUserSeq, newUserSeq, 0], conn);
            if (selfResult.affectedRows < 1) throw new Error('자체 회원관계 입력 실패');

            //매니저 seq 찾기
            query = 'SELECT seq FROM ams_user WHERE id = ?';
            const managerSeqResult = await selectQuery<SimpleRow<{ seq: number }>[]>(query, [managerId], conn);
            if (managerSeqResult.length < 1) throw new Error('select fail managerSeq');
            const managerSeq = managerSeqResult[0].seq;

            //매니저와의 회원관계도 입력
            query = `
            INSERT INTO ams_user_closure (ancestorSeq, descendantSeq, depth) 
            SELECT ancestorSeq, ?, depth + 1
            FROM ams_user_closure
            WHERE descendantSeq = ?`;
            const closureResult = await modifyQuery(query, [newUserSeq, managerSeq], conn);
            if (closureResult.affectedRows < 1) throw new Error('매니저와의 회원관계도 입력 실패');

            //입력된 회원정보 전송
            const row = await selectQuery<User[]>(commonSelectQueryStr, [newUserSeq], conn);
            if (row.length < 1) throw new Error('입력된 회원정보 전송 실패');
            const { pw, ...userData } = row[0];
            return userData;
        });
        res.json({ success: true, message: newUserData });
    } catch (error) {
        res.json({ success: false, message: `<api user joinNetwork> ${error}` });
    }
}

export async function joinBusiness(req: Request, res: Response) {
    const { userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu } = req.body;
    try {
        const newUserData = await withTransaction(async (conn) => {
            //회원정보 입력
            let query = 'INSERT INTO ams_user (type, industry, id, pw, name, email, phone, sido, sigungu) VALUES(?,?,?,?,?,?,?,?,?)';
            const insertResult = await modifyQuery(query, ['y', userIndustry, userId, userPw, userName, userEmail, userPhone, userSido, userSigungu], conn);
            if (insertResult.affectedRows < 1) throw new Error('insert fail');
            const newUserSeq = insertResult.insertId;

            //회원관계도 입력
            query = "INSERT INTO ams_user_closure (ancestorSeq, descendantSeq, depth) VALUES (?, ?, ?)"
            const closureResult = await modifyQuery(query, [newUserSeq, newUserSeq, 0], conn);
            if (closureResult.affectedRows < 1) throw new Error('회원관계 입력 실패');

            //입력된 회원정보 전송
            const row = await selectQuery<User[]>(commonSelectQueryStr, [newUserSeq], conn);
            if (row.length < 1) throw new Error('select fail after insert');
            const { pw, ...userData } = row[0];
            return userData;
        });
        res.json({ success: true, message: newUserData });
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

export async function getDescendant(req: Request, res: Response) {
    try {
        const { userSeq } = req.params;
        const queryStr = `
        SELECT u.seq, u.name, u.phone, c.depth 
        FROM ams_user_closure c
        JOIN ams_user u ON u.seq = c.descendantSeq
        WHERE c.ancestorSeq = ? AND c.depth > 0`;
        const result = await selectQuery<SimpleRow<{ seq: number, name: string, phone: string, depth: number }>[]>(queryStr, [userSeq]);
        res.json({ success: true, message: result });
    } catch (err) {
        res.json({ success: false, message: `<api getDescendant> ${err}` })
    }
}

export async function getPointLog(req: Request, res: Response) {
    try {
        const { userSeq } = req.params;
        const queryStr = `SELECT * FROM ams_point_log WHERE userSeq = ? ORDER BY wday DESC`;
        const result = await selectQuery<PointLog[]>(queryStr, [userSeq]);
        res.json({ success: true, message: result });
    } catch (err) {
        res.json({ success: false, message: `<api getPointLog> ${err}` });
    }

}

export async function getMinion(req: Request, res: Response) {
    try {
        const { userSeq } = req.params;
        const queryStr = `SELECT 
        p.ancestorSeq AS parentSeq,
        p.descendantSeq AS childSeq,
        u1.name AS parentName, 
        u2.name AS childName
        FROM ams_user_closure p
        JOIN ams_user_closure r ON p.descendantSeq = r.descendantSeq
        JOIN ams_user u1 ON u1.seq = p.ancestorSeq
        JOIN ams_user u2 ON u2.seq = p.descendantSeq
        WHERE r.ancestorSeq = ? AND p.depth = 1 
        ORDER BY parentSeq, childSeq`;
        const result = await selectQuery<Minion[]>(queryStr, [userSeq]);
        res.json({ success: true, message: result });
    } catch (err) {
        console.error(`<api getMinion> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}

export async function registerBank(req: Request, res: Response) {
    try {
        const { userSeq, bankName, owner, accountNum } = req.body;
        const queryStr = `INSERT INTO bank_account (userSeq, bankName, owner, accountNum) VALUES (?, ?, ?, ?)`;
        const result = await modifyQuery(queryStr, [userSeq, bankName, owner, accountNum]);
        if (result.affectedRows < 1) throw new Error('계좌 등록 실패');
        const insertedId = result.insertId;

        //등록된 계좌 정보 조회
        const selectQueryStr = `SELECT bankName, owner, accountNum FROM bank_account WHERE seq = ?`;
        const bankAccountInfo = await selectQuery<SimpleRow<{ bankName: string, owner: string, accountNum: string }>[]>(selectQueryStr, [insertedId]);
        res.json({ success: true, message: bankAccountInfo[0] });
    } catch (err) {
        console.error(`<api registerBank> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}

export async function getBankAccount(req: Request, res: Response) {
    try {
        const { userSeq } = req.params;
        const queryStr = `SELECT bankName, owner, accountNum FROM bank_account WHERE userSeq = ?`;
        const result = await selectQuery<SimpleRow<{ bankName: string, owner: string, accountNum: string }>[]>(queryStr, [userSeq]);
        res.json({ success: true, message: result.length > 0 ? result[0] : { bankName: '', owner: '', accountNum: '' } });
    } catch (err) {
        console.error(`<api getBankAccount> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}

export async function withdrawalReq(req: Request, res: Response) {
    try {
        const { userSeq, amount } = req.body;

        // 서버에서 금액 검증
        const parsedAmount = Number(amount);
        if (!Number.isInteger(parsedAmount) || parsedAmount < 10000 || parsedAmount % 10000 !== 0) {
            return res.json({ success: false, message: '잘못된 금액입니다.' });
        }

        const logResult = await executeWithRety(async () => {
            return await withTransaction(async (conn) => {
                //포인트 차감 먼저
                let queryStr = `UPDATE ams_user SET point = point - ? WHERE seq = ? AND point >= ?`;
                const updateResult = await modifyQuery(queryStr, [parsedAmount, userSeq, parsedAmount], conn);
                if (updateResult.affectedRows < 1) throw new Error('포인트 차감 실패');

                // 2. 차감 후 잔액 조회
                queryStr = `SELECT point FROM ams_user WHERE seq = ?`;
                const [user] = await selectQuery<SimpleRow<{ point: number }>[]>(queryStr, [userSeq], conn);
                if (!user) throw new Error('사용자 조회 실패');
                const currentBalance: number = user.point;

                //출금 요청 내역 입력
                queryStr = `INSERT INTO ams_point_log (userSeq, utilize, subject, amount, balance) VALUES (?, ?, ?, ?, ?)`;
                const insertResult = await modifyQuery(queryStr, [userSeq, '출금요청', `요청일 : ${new Date().toLocaleString('ko-KR')}`, -parsedAmount, currentBalance], conn);
                if (insertResult.affectedRows < 1) throw new Error('출금 요청 실패');
                const insertedId = insertResult.insertId;

                //최근 입력 포인트로그 가져오기
                queryStr = `SELECT * FROM ams_point_log WHERE seq = ?`;
                const [logRow] = await selectQuery<PointLog[]>(queryStr, [insertedId], conn);
                if (!logRow) throw new Error('출금 요청 내역 조회 실패');
                return logRow;
            });
        });
        res.json({ success: true, message: logResult });

        const queryStr = `SELECT COUNT(*) as cnt FROM ams_point_log WHERE utilize = ?`;
        const [result] = await selectQuery<SimpleRow<{ cnt: number }>[]>(queryStr, ['출금요청']);
        sendAdminEvent("SSE_EVENT", { type: 'withdrawal', data: result.cnt });

    } catch (err) {
        console.error(`<api withdrawal> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}

export async function getWithdrawalReq(_: Request, res: Response) {
    try {
        const queryStr = `
        SELECT p.*, u.name, b.bankName, b.accountNum, b.owner 
        FROM ams_point_log p 
        LEFT JOIN ams_user u ON p.userSeq = u.seq
        LEFT JOIN bank_account b ON p.userSeq = b.userSeq
        WHERE p.utilize = ? ORDER BY p.wday DESC
        `;
        const result = await selectQuery<Withdrawal[]>(queryStr, ['출금요청']);
        res.json({ success: true, message: result });
    } catch (err) {
        console.error(`<api getWithdrawalReq> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}

export async function withdrawalAccept(req: Request, res: Response) {
    try {
        const { targetSeq, subject } = req.body;
        const seq = Number(targetSeq);
        if (Number.isNaN(seq)) throw new Error('Invalid seq value');

        let queryStr = `UPDATE ams_point_log SET utilize = ?, subject = CONCAT(IFNULL(subject, ''), ?), eday = ? WHERE seq = ?`;
        const result = await modifyQuery(queryStr, ['출금완료', ` / ${subject}`, new Date(), Number(seq)]);
        if (result.affectedRows < 1) throw new Error('업데이트 실패');
        res.json({ success: true, message: 'update ok' });

        queryStr = `SELECT COUNT(*) as cnt FROM ams_point_log WHERE utilize = ?`;
        const [result2] = await selectQuery<SimpleRow<{ cnt: number }>[]>(queryStr, ['출금요청']);
        sendAdminEvent("SSE_EVENT", { type: 'withdrawal', data: result2.cnt });
    } catch (err) {
        console.error(`<api withdrawalAccept> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}

export async function getRemittance(req: Request, res: Response) {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const queryStr = `
            SELECT p.*, u.name, b.bankName, b.accountNum, b.owner 
            FROM ams_point_log p 
            LEFT JOIN ams_user u ON p.userSeq = u.seq
            LEFT JOIN bank_account b ON p.userSeq = b.userSeq
            WHERE p.utilize = ? AND p.eday IS NOT NULL
            ORDER BY p.eday DESC
            LIMIT ? OFFSET ?
         `;
        const result = await selectQuery<Withdrawal[]>(queryStr, ['출금완료', limit, offset]);
        res.json({ success: true, message: result });
    } catch (err) {
        console.error(`<api getRemittance> ${err}`);
        res.json({ success: false, message: `${err}` });
    }
}