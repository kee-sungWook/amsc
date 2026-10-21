import type { IndustryModel } from "@interface/models";
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

export const apiInsertIndustry = async (payload: IndustryPayload) => {
    const { data } = await api.post<IndustryModel>(`/industry/insertIndustry`, toFormData(payload));
    return data;
};

export const apiUpdateIndustry = async (seq: number, payload: IndustryPayload) => {
    const { data } = await api.patch<IndustryModel>(`/industry/updateIndustry/${seq}`, toFormData(payload));
    return data;
};
