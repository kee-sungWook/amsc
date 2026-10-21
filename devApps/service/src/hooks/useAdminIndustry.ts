import type { IndustryModel } from "@interface/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { qKeyAdminIndustry } from "./queryKey/query.key.adminIndustry";
import { apiGetIndustries, apiInsertIndustry, apiUpdateIndustry, type IndustryPayload } from "@api/api.adminIndustry";

export const useAdminIndustry = () => {
    const queryClient = useQueryClient();

    const {
        data: industries,
        dataUpdatedAt: industriesUpdatedAt,
        isFetching: industriesFetching
    } = useQuery<IndustryModel[]>({
        queryKey: qKeyAdminIndustry.getIndustries(),
        queryFn: apiGetIndustries,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    });

    const insertIndustry = useMutation({
        mutationFn: (payload: IndustryPayload) => apiInsertIndustry(payload),
        // 목록 재조회가 끝난 뒤 mutateAsync 가 resolve 되도록 promise 반환
        onSuccess: () => queryClient.invalidateQueries({ queryKey: qKeyAdminIndustry.getIndustries() })
    });

    const updateIndustry = useMutation({
        mutationFn: ({ seq, ...payload }: IndustryPayload & { seq: number }) => apiUpdateIndustry(seq, payload),
        // 목록 재조회가 끝난 뒤 mutateAsync 가 resolve 되도록 promise 반환
        onSuccess: () => queryClient.invalidateQueries({ queryKey: qKeyAdminIndustry.getIndustries() })
    });

    const industriesLoading = industriesFetching || insertIndustry.isPending || updateIndustry.isPending;

    return {
        industries,
        industriesUpdatedAt,
        industriesLoading,
        insertIndustry,
        updateIndustry
    };
};
