import type { OrderWithPoint } from "@interface/models";
import { api } from "./api.axios";

export const apiGetAdminOrders = async (page: number, limit: number, situation: string) => {
    const { data } = await api.get<{ success: boolean; message: { data: OrderWithPoint[]; total: number } }>(
        `/order/getOrderForAdmin?page=${page}&limit=${limit}&situation=${situation}`
    );
    return data.message;
};

export const apiUpdateAdminOrderCancel = async (orderSeq: number) => {
    const { data } = await api.patch<number>(`/order/updateAdminOrderCancel/${orderSeq}`);
    return data;
};

export const apiGetAdminCancelOrders = async (page: number, limit: number, situation: string) => {
    const { data } = await api.get<{ data: OrderWithPoint[]; total: number }>(
        `/order/getCancelOrderForAdmin?page=${page}&limit=${limit}&situation=${situation}`
    );
    return data;
};

export const apiDeleteAdminCancelOrder = async (orderSeqs: number[]) => {
    const { data } = await api.post<{ success: boolean; message: string }>(`/order/deleteOrder`, {
        orderSeqs: orderSeqs
    });
    return data;
};
