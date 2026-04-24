import { selectQuery } from "@connect/query.js";
import { Region } from "@models/Region";
import { RowDataPacket } from "mysql2";


export const getSido = async () => {
    const rows = await selectQuery<(Region & RowDataPacket)[]>(
        `SELECT code, name FROM ams_regions WHERE level = ? ORDER BY code ASC`,
        [1]
    );
    return rows;
};


export const getSigungu = async (pcode: string) => {
    const rows = await selectQuery<(Region & RowDataPacket)[]>(
        `SELECT code, name FROM ams_regions WHERE parentCode = ? ORDER BY code ASC`,
        [pcode]
    );
    return rows;
}