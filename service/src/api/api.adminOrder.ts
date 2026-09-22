import type { OrderWithWorker, OrderWithPoint } from "@interface/models";
import { api } from "./api.axios";

export const apiGetAdminOrders = async (page: number, limit: number, situation: string) => {
    const { data } = await api.get<{ success: boolean; message: { data: OrderWithPoint[]; total: number } }>(
        `/order/getOrderForAdmin?page=${page}&limit=${limit}&situation=${situation}`
    );
    console.log(`data: ${JSON.stringify(data.message)}`);
    return data.message;
};

export const apiUpdateAdminOrderCancel = async (orderSeq: number) => {
    await api.get<{ success: boolean; message: string }>(`/order/updateAdminOrderCancel/${orderSeq}`);
};

// export const apiGetAdminCancelOrder = async (page: number, limit: number, situation: string) => {
//     const { data } = await api.get<{ data: OrderWithWorker[]; total: number }>(
//         `/order/getOrderForAdmin?page=${page}&limit=${limit}&situation=${situation}`
//     );
//     return data;
// };
