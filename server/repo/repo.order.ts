import { modifyQuery, selectQuery, withTransaction, executeWithRety } from "@connect/query.js";
import { Order, OrderWithWorker } from "@models/Order";
import { RowDataPacket } from "mysql2/promise";

export const insertSingleOrder = async (order: Record<string, any>) => {
    return executeWithRety(async () => {
        return await withTransaction(async (conn) => {
            const columns = Object.keys(order);
            const values: any[] = Object.values(order);
            if (values.length === 0) throw new Error("Insert Values are empty");
            const placeholders = values.map(() => "?").join(", ");
            const queryStr = `INSERT INTO ams_order (${columns.join(",")}) VALUES(${placeholders})`;
            const result = await modifyQuery(queryStr, values, conn);
            if (result.affectedRows < 1) throw new Error("insert fail");
            return true;
        });
    });
};

export const updateOrder = async (seq: number, values: (string | number | Date | null)[], placeholders: string) => {
    const queryStr = `UPDATE ams_order SET ${placeholders} WHERE seq = ?`;
    const res = await modifyQuery(queryStr, [...values, seq]);
    return res;
};

export const selectOrderBySeq = async (seq: number) => {
    const queryStr = `
        SELECT 
            o.*,
            c.cancel_reason AS cancelReason, 
            c.wday AS cancelWday,
            COALESCE(w.company, m.company) as workerCompany, 
            COALESCE(w.phone, m.phone) as workerPhone
        FROM ams_order o
        JOIN ams_user u ON o.requester = u.seq 
        LEFT JOIN ams_user w ON o.worker = w.seq
        LEFT JOIN ams_member m ON o.worker = m.seq
        LEFT JOIN ams_order_cancel c ON o.seq = c.order_seq
        WHERE o.seq = ?
    `;
    const res = await selectQuery<(Partial<OrderWithWorker> & RowDataPacket)[]>(queryStr, [Number(seq)]);
    return res;
};

export const getCancelOrderForAdmin = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    const res = await selectQuery<Partial<OrderWithWorker> & RowDataPacket[]>(
        `
        SELECT 
                o.*,
                c.cancel_reason AS cancelReason,
                c.wday AS cancelWday,
                COALESCE(w.company, m.company) as workerCompany, 
                COALESCE(w.phone, m.phone) as workerPhone,
                r.name as requesterName,
                r.phone as requesterPhone
            FROM ams_order o
            LEFT JOIN ams_user r ON o.requester = r.seq
            LEFT JOIN ams_user w ON o.worker = w.seq
            LEFT JOIN ams_member m ON o.worker = m.seq
            LEFT JOIN ams_order_cancel c ON o.seq = c.order_seq
            WHERE o.situation = 'cancel'
            ORDER BY o.created DESC
            LIMIT ? OFFSET ?
        `,
        [limit, offset]
    );
};

export const insertCancelOrder = async (orderSeq: number, cancelReason: string) => {
    const queryStr = `INSERT INTO ams_order_cancel (order_seq, cancel_reason) VALUES (?, ?)`;
    const res = await modifyQuery(queryStr, [Number(orderSeq), cancelReason]);
    return res;
};

export const deleteOrderBySeq = async (orderSeq: number) => {
    const queryStr = `DELETE FROM ams_order WHERE seq = ?`;
    const res = await modifyQuery(queryStr, [Number(orderSeq)]);
    return res;
};
