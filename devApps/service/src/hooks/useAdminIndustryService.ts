import type { IndustryServiceModel } from "@interface/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { qKeyAdminIndustry } from "./queryKey/query.key.adminIndustry";
import { apiGetServices, apiInsertService, apiUpdateService, type IndustryPayload } from "@api/api.adminIndustry";

export const useAdminIndustryService = (parentCode?: string) => {
    const queryClient = useQueryClient();

    const {
        data: services,
        dataUpdatedAt: servicesUpdatedAt,
        isFetching: servicesFetching
    } = useQuery<IndustryServiceModel[]>({
        queryKey: qKeyAdminIndustry.getServices(parentCode ?? ""),
        queryFn: () => apiGetServices(parentCode!),
        enabled: !!parentCode,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    });

    const insertService = useMutation({
        mutationFn: (payload: IndustryPayload) => apiInsertService(parentCode!, payload),
        // 목록 재조회가 끝난 뒤 mutateAsync 가 resolve 되도록 promise 반환
        onSuccess: () => queryClient.invalidateQueries({ queryKey: qKeyAdminIndustry.getServices(parentCode ?? "") })
    });

    const updateService = useMutation({
        mutationFn: ({ seq, ...payload }: IndustryPayload & { seq: number }) => apiUpdateService(seq, payload),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: qKeyAdminIndustry.getServices(parentCode ?? "") })
    });

    return {
        services,
        servicesUpdatedAt,
        servicesFetching,
        insertService,
        updateService
    };
};
