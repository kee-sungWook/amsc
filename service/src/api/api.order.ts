import type { OrderWithPoint, OrderWithWorker } from "@interface/models";
import { api } from "./api.axios";

export const apiGetOrderForC = async (userSeq: number) => {
    const { data } = await api.get<{ success: boolean; message: OrderWithPoint[] }>(`/order/getOrderForc/${userSeq}`);
    return data.message;
};

export const apiUpdateOrder = async (sendData: {
    seq: number;
    updateData: {
        title: string;
        detail: string;
        userName: string;
        userPhone: string;
    };
}) => {
    const { data } = await api.post<{ success: boolean; message: Partial<OrderWithWorker> }>(
        `/order/updateOrder`,
        sendData
    );
    return data.message;
};

export const apiDeleteOrder = async (orderSeq: number) => {
    const { data } = await api.get<{ success: boolean; message: string }>(`/order/deleteOrderBySeq/${orderSeq}`);
    return data.message;
};

export const apiCancelReqOrder = async (sendData: { seq: number; cancelReason: string }) => {
    const { data } = await api.post<{ success: boolean; message: Partial<OrderWithWorker> }>(
        `/order/cancelOrder`,
        sendData
    );
    return data.message;
};
