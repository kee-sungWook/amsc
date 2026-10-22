import { modifyQuery, selectQuery } from "@connect/query.js";
import { Industry, IndustryService } from "@models/Industry.js";
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

export const selectServicesByParentCode = async (parentCode: string, conn?: PoolConnection) => {
    const queryStr = `SELECT seq, parent_code, name, code, icon FROM ams_industry_service WHERE parent_code = ? ORDER BY seq ASC`;
    const res = await selectQuery<IndustryService[]>(queryStr, [parentCode], conn);
    return res;
};

export const selectServiceBySeq = async (seq: number, conn?: PoolConnection) => {
    const queryStr = `SELECT seq, parent_code, name, code, icon FROM ams_industry_service WHERE seq = ?`;
    const res = await selectQuery<IndustryService[]>(queryStr, [seq], conn);
    return res;
};

export const insertService = async (
    parentCode: string,
    name: string,
    code: string,
    icon: string | null,
    conn?: PoolConnection
) => {
    const queryStr = `INSERT INTO ams_industry_service (parent_code, name, code, icon) VALUES (?, ?, ?, ?)`;
    const res = await modifyQuery(queryStr, [parentCode, name, code, icon], conn);
    return res;
};

export const updateService = async (
    seq: number,
    name: string,
    code: string,
    icon: string | null,
    conn?: PoolConnection
) => {
    const queryStr = `UPDATE ams_industry_service SET name = ?, code = ?, icon = ? WHERE seq = ?`;
    const res = await modifyQuery(queryStr, [name, code, icon, seq], conn);
    return res;
};

export const updateServiceIcon = async (seq: number, icon: string | null, conn?: PoolConnection) => {
    const queryStr = `UPDATE ams_industry_service SET icon = ? WHERE seq = ?`;
    const res = await modifyQuery(queryStr, [icon, seq], conn);
    return res;
};
