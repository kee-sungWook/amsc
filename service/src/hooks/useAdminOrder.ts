import type { OrderWithWorker, OrderWithPoint } from "@interface/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { qKeyAdminOrder } from "./queryKey/query.key.adminOrder";
import { apiGetAdminOrders, apiUpdateAdminOrderCancel } from "@api/api.adminOrder";

export const useAdminOrder = (page: number, situation: string, limit: number) => {
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

    // const { data: adminCancelReqOrder, isFetching: adminCancelReqOrderFetching } = useQuery<{
    //     data: OrderWithWorker[];
    //     total: number;
    // }>({
    //     queryKey: qKeyAdminOrder.getAdminCancelReqOrder(page, situation),
    //     queryFn: () => apiAdminCancelReqOrder(page, limit, situation),
    //     staleTime: 1000 * 60 * 5
    //     // refetchOnWindowFocus: false,
    //     // refetchOnReconnect: false
    // });

    const adminOrdersLoading = adminOrdersFetching || updateAdminOrderCancel.isPending;
    // const reqCancelLoading = adminCancelReqOrderFetching || adminCancelReqUpdate.isPending;

    return { adminOrders, adminOrdersLoading };
};
