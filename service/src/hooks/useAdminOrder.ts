import type { OrderWithPoint } from "@interface/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { qKeyAdminOrder } from "./queryKey/query.key.adminOrder";
import {
    apiDeleteAdminCancelOrder,
    apiGetAdminCancelOrders,
    apiGetAdminOrders,
    apiUpdateAdminOrderCancel
} from "@api/api.adminOrder";

export const useAdminOrder = (page: number, situation: string = "", limit: number) => {
    const queryClient = useQueryClient();

    const { data: adminOrders, isFetching: adminOrdersFetching } = useQuery<{
        data: OrderWithPoint[];
        total: number;
    }>({
        queryKey: qKeyAdminOrder.getAdminOrders(page, situation),
        queryFn: () => apiGetAdminOrders(page, limit, situation),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    });

    const updateAdminOrderCancel = useMutation({
        mutationFn: (orderSeq: number) => apiUpdateAdminOrderCancel(orderSeq),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: qKeyAdminOrder.getAdminOrders(page, situation) });
        }
    });

    const { data: adminCancelOrders, isFetching: adminCancelOrdersFetching } = useQuery<{
        data: OrderWithPoint[];
        total: number;
    }>({
        queryKey: qKeyAdminOrder.getAdminCancelOrders(page, situation),
        queryFn: () => apiGetAdminCancelOrders(page, limit, situation),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    });

    const deleteAdminCancelOrder = useMutation({
        mutationFn: (orderSeqs: number[]) => apiDeleteAdminCancelOrder(orderSeqs),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: qKeyAdminOrder.getAdminCancelOrders(page, situation) });
        }
    });

    const adminOrdersLoading = adminOrdersFetching || updateAdminOrderCancel.isPending;
    // const reqCancelLoading = adminCancelReqOrderFetching || adminCancelReqUpdate.isPending;

    return {
        adminOrders,
        adminOrdersLoading,
        adminCancelOrders,
        adminCancelOrdersFetching,
        updateAdminOrderCancel,
        deleteAdminCancelOrder
    };
};
