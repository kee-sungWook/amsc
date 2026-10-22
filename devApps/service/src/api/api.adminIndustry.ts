import type { IndustryModel, IndustryServiceModel } from "@interface/models";
import { api } from "./api.axios";

export type IndustryPayload = { name: string; code: string; iconFile?: File | null };

const toFormData = ({ name, code, iconFile }: IndustryPayload) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("code", code);
    if (iconFile) formData.append("icon", iconFile);
    return formData;
};

export const apiGetIndustries = async () => {
    const { data } = await api.get<IndustryModel[]>(`/industry/getIndustries`);
    return data;
};

export const apiGetServices = async (parentCode: string) => {
    const { data } = await api.get<IndustryServiceModel[]>(`/industry/getServices/${parentCode}`);
    return data;
};

export const apiInsertIndustry = async (payload: IndustryPayload) => {
    const { data } = await api.post<IndustryModel>(`/industry/insertIndustry`, toFormData(payload));
    return data;
};

export const apiUpdateIndustry = async (seq: number, payload: IndustryPayload) => {
    const { data } = await api.patch<IndustryModel>(`/industry/updateIndustry/${seq}`, toFormData(payload));
    return data;
};

export const apiInsertService = async (parentCode: string, payload: IndustryPayload) => {
    const formData = toFormData(payload);
    formData.append("parent_code", parentCode);
    const { data } = await api.post<IndustryServiceModel>(`/industry/insertService`, formData);
    return data;
};

export const apiUpdateService = async (seq: number, payload: IndustryPayload) => {
    const { data } = await api.patch<IndustryServiceModel>(`/industry/updateService/${seq}`, toFormData(payload));
    return data;
};
