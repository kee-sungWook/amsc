import { create } from "zustand";
import type { AllowServiceVal } from "@interface/others";


interface ServiceChoose {
    applyList: AllowServiceVal[];
    setApplyList: (applyList: AllowServiceVal[]) => void;
    clearApplyList: () => void;
}

export const useServiceChoose = create<ServiceChoose>((set) => ({
    applyList: [],
    setApplyList: (applyList: AllowServiceVal[]) => set({ applyList }),
    clearApplyList: () => set({ applyList: [] })
}));