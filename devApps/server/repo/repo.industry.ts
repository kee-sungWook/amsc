import { modifyQuery, selectQuery } from "@connect/query.js";
import { Industry } from "@models/Industry.js";
import { PoolConnection } from "mysql2/promise";

export const selectIndustries = async () => {
    const queryStr = `SELECT seq, name, code, icon FROM ams_industry ORDER BY seq ASC`;
    const res = await selectQuery<Industry[]>(queryStr);
    return res;
};

export const selectIndustryBySeq = async (seq: number, conn?: PoolConnection) => {
    const queryStr = `SELECT seq, name, code, icon FROM ams_industry WHERE seq = ?`;
    const res = await selectQuery<Industry[]>(queryStr, [seq], conn);
    return res;
};

export const insertIndustry = async (name: string, code: string, icon: string | null, conn?: PoolConnection) => {
    const queryStr = `INSERT INTO ams_industry (name, code, icon) VALUES (?, ?, ?)`;
    const res = await modifyQuery(queryStr, [name, code, icon], conn);
    return res;
};

export const updateIndustry = async (
    seq: number,
    name: string,
    code: string,
    icon: string | null,
    conn?: PoolConnection
) => {
    const queryStr = `UPDATE ams_industry SET name = ?, code = ?, icon = ? WHERE seq = ?`;
    const res = await modifyQuery(queryStr, [name, code, icon, seq], conn);
    return res;
};
