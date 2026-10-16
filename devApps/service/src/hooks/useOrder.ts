import type { OrderWithWorker } from "@interface/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiDeleteOrder, apiGetOrderForC, apiCancelReqOrder, apiUpdateOrder } from "@api/api.order";
import { useUserStore } from "@store/publicState";
import { qKeyOrder } from "./queryKey/query.key.order";

export function useOrder() {
    const userSeq = useUserStore((state) => state.user?.seq!);
    const queryClient = useQueryClient();

    const { data: userOrderList, isFetching: userOrderFetching } = useQuery<OrderWithWorker[]>({
        queryKey: qKeyOrder.getOrderForC(userSeq),
        queryFn: () => apiGetOrderForC(userSeq),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });

    const userOrderUpdate = useMutation<
        Partial<OrderWithWorker>,
        Error,
        { seq: number; updateData: { title: string; detail: string; userName: string; userPhone: string } }
    >({
        mutationFn: (payload) => apiUpdateOrder(payload),
        onSuccess: (newData) => {
            queryClient.setQueryData(qKeyOrder.getOrderForC(userSeq), (oldData: OrderWithWorker[] | undefined) =>
                oldData?.map((order) => (order.seq === newData.seq ? { ...order, ...newData } : order))
            );
        }
    });

    const userOrderCancelReq = useMutation<Partial<OrderWithWorker>, Error, { seq: number; cancelReason: string }>({
        mutationFn: (payload) => apiCancelReqOrder(payload),
        onSuccess: (newData) => {
            queryClient.setQueryData(qKeyOrder.getOrderForC(userSeq), (oldData: OrderWithWorker[]) =>
                oldData.map((order) => (order.seq === newData.seq ? { ...order, ...newData } : order))
            );
        }
    });

    const userOrderDelete = useMutation<string, Error, number>({
        mutationFn: (orderSeq) => apiDeleteOrder(orderSeq),
        onSuccess: (result, variables) => {
            console.log("deleteResult : ", result);
            queryClient.setQueryData(qKeyOrder.getOrderForC(userSeq), (oldData: OrderWithWorker[]) =>
                oldData.filter((order) => order.seq !== variables)
            );
        }
    });

    const userOrderLoading = userOrderFetching || userOrderUpdate.isPending || userOrderCancelReq.isPending;

    return {
        userOrderList,
        userOrderLoading,
        userOrderUpdate,
        userOrderDelete,
        userOrderCancelReq
    };
}
