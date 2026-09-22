import * as repo from "@repo/repo.order.js";
import { modifyQuery, selectQuery } from "@connect/query";
import { AppError } from "@utils/err.app";

export const updateOrder = async (orderSeq: number, updateData: any, imgFile?: Express.Multer.File) => {
    if (!orderSeq || typeof orderSeq !== "number") {
        throw new AppError("INVALID_SEQ", "[svc.order] updateOrder", "seq is not number", 400, {
            orderSeq
        });
    }

    if (!updateData || typeof updateData !== "object") {
        throw new AppError("INVALID_UPDATE_DATA", "[svc.order] updateOrder", "updateData is not object", 400, {
            updateData
        });
    }

    if (imgFile) {
        updateData.img = `/uploads/${imgFile.filename}`;
    }

    if (updateData.situation === "finish") {
        updateData.fday = new Date();
    }

    const columns = Object.keys(updateData);
    const values: (string | number | Date | null)[] = Object.values(updateData);
    const placeholders = columns.map((col) => `${col} = ?`).join(", ");

    const updateRes = await repo.updateOrder(Number(orderSeq), values, placeholders);
    if (updateRes.affectedRows === 0) {
        throw new AppError("UPDATE_FAIL", "[svc.order] updateOrder", "update fail", 400, {
            orderSeq
        });
    }

    const result = await repo.selectOrderBySeq(Number(orderSeq));
    if (result.length === 0) {
        throw new AppError("NOT_FOUND", "[svc.order] updateOrder", "order not found", 400, {
            orderSeq
        });
    }

    return result[0];
};

export const cancelOrder = async (orderSeq: number, cancelReason: string) => {
    const insertRes = await repo.insertCancelOrder(orderSeq, cancelReason);
    if (!insertRes.affectedRows) {
        throw new AppError("INSERT_FAIL", "[svc.order] cancelOrder", "insert fail", 400, {
            orderSeq
        });
    }

    const updateData = { situation: "cancelReady" };
    const columns = Object.keys(updateData);
    const values: (string | number | Date | null)[] = Object.values(updateData);
    const placeholders = columns.map((col) => `${col} = ?`).join(", ");

    const updateRes = await repo.updateOrder(orderSeq, values, placeholders);
    if (!updateRes.affectedRows) {
        throw new AppError("UPDATE_FAIL", "[svc.order] cancelOrder", "update fail", 400, {
            orderSeq
        });
    }

    const selectRes = await repo.selectOrderBySeq(orderSeq);
    if (selectRes.length === 0) {
        throw new AppError("NOT_FOUND", "[svc.order] cancelOrder", "order not found", 400, {
            orderSeq
        });
    }

    return selectRes[0];
};

export const deleteOrderBySeq = async (orderSeq: number) => {
    const res = await repo.deleteOrderBySeq(orderSeq);
    if (res.affectedRows === 0) {
        throw new AppError("DELETE_FAIL", "[svc.order] deleteOrderBySeq", "delete fail", 400, {
            orderSeq
        });
    }
    return "delete OK";
};
