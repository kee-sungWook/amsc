import "dotenv/config"; // .env 읽어오기
import { createPool, Pool, PoolConnection } from "mysql2/promise";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";

export const pool: Pool = createPool({
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

//재시도 유틸
export async function executeWithRety<T>(fn: () => Promise<T>, maxRetry = 3): Promise<T> {
    let lastError: unknown;
    for (let attempt = 1; attempt <= maxRetry; attempt++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            if (attempt === maxRetry) break;
        }
    }
    throw lastError;
}

//트랜잭션 헬퍼
export async function withTransaction<T>(fn: (conn: PoolConnection) => Promise<T>): Promise<T> {
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        const result = await fn(conn);
        await conn.commit();
        return result;
    } catch (e) {
        await conn.rollback();
        throw e;
    } finally {
        conn.release();
    }
}

export async function selectQuery<T extends RowDataPacket[]>(
    sql: string, //
    params: (string | number | null)[] = [],
    conn?: PoolConnection
): Promise<T> {
    const executor = conn ?? pool;
    const [rows] = await executor.execute<T>(sql.trim(), params);
    return rows;
}

export async function modifyQuery(
    sql: string, //
    params: (string | number | null)[] = [],
    conn?: PoolConnection
): Promise<ResultSetHeader> {
    const executor = conn ?? pool;
    const [result] = await executor.execute<ResultSetHeader>(sql.trim(), params);
    return result;
}