import { selectQuery } from "@connect/query";
import { User } from "@models/User";

export const adminLogin = async (memId: string, memPw: string) => {
    const sql = 'SELECT * FROM ams_member WHERE id = ? AND pw = ? AND type= ?';
    const rows = await selectQuery<User[]>(sql, [memId, memPw, 'a']);
    return rows;
};