import type { OrderWithPoint, UserWithP } from "@interface/models";
import { create } from "zustand";

interface AdminStore {
    amsUsers: UserWithP[],
    setAmsUsers: (amsUsers: UserWithP[]) => void;
    amsOrders: OrderWithPoint[],
    setAmsOrders: (amsOrders: OrderWithPoint[]) => void;
}

export const useAdminStore = create<AdminStore>()((set) => ({
    amsUsers: [],
    setAmsUsers: (amsUsers: UserWithP[]) => set({ amsUsers }),
    amsOrders: [],
    setAmsOrders: (amsOrders: OrderWithPoint[]) => set({ amsOrders }),
}));