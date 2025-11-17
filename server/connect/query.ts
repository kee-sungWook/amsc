import "dotenv/config"; // .env 읽어오기
import { createPool, Pool } from "mysql2/promise";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";

const pool: Pool = createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

export async function selectQuery<T extends RowDataPacket[]>(
    sql: string, //
    params: (string | number)[] = [] as (string | number)[]
): Promise<T> {
    const [rows] = await pool.execute<T>(sql.trim(), params);
    return rows;
}

export async function modifyQuery(
    sql: string, //
    params: (string | number)[] = [] as (string | number)[]
): Promise<ResultSetHeader> {
    const [result] = await pool.execute<ResultSetHeader>(sql.trim(), params);
    return result;
}