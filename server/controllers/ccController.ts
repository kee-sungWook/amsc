import { selectQuery } from "@connect/query.js";
import { RowDataPacket } from "mysql2";

interface CCdata {
    seq: number;
    menu_code: string;
    code1: string;
    code2: string;
    code3: string;
    code4: string;
    code5: string;
    title: string;
};

export const getCCdatas = async (reqBody: any) => {
    const { menuCode, code1 } = reqBody;
    const sql = `SELECT * FROM ams_cc WHERE menu_code=? AND code1=? ORDER BY code2 ASC`;
    const prepare = [menuCode, code1];
    const rows = await selectQuery<(CCdata & RowDataPacket)[]>(sql, prepare);
    return rows;
};

export const getSystemG = async (reqBody: any) => {
    console.log(`getSystemG reqBody: `, reqBody);
    const { menu_code, field1, code1, field2, code2, field3, code3, field4, code4, field5, code5, order } = reqBody;
    let sql = `SELECT * FROM ams_cc WHERE menu_code=${menu_code} AND ${field1}=${code1} `;
    if (code2) sql += `AND ${field2}=${code2} `;
    if (code3) sql += `AND ${field3}=${code3} `;
    if (code4) sql += `AND ${field4}=${code4} `;
    if (code5) sql += `AND ${field5}=${code5} `;
    if (order) sql += `ORDER BY ${order} ASC`;

    const rows = await selectQuery<(CCdata & RowDataPacket)[]>(sql);
    return rows;
};

export const getOp = async (reqBody: any) => {
    const { con_id } = reqBody;
    const sql = `SELECT con_title, con_text FROM ams_op WHERE con_id = ?`;
    const prepare = [con_id];
    const rows = selectQuery<({ con_title: string, con_text: string } & RowDataPacket)[]>(sql, prepare);

    return rows;
};
