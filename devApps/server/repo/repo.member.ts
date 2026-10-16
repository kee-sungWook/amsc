import { selectQuery } from "@connect/query.js";
import { User } from "@models/User.js";

export const adminLogin = async (memId: string, memPw: string) => {
    const sql = "SELECT * FROM ams_member WHERE id = ? AND pw = ? AND type= ?";
    const rows = await selectQuery<User[]>(sql, [memId, memPw, "a"]);
    return rows;
};
