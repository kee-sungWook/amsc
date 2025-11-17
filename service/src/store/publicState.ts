import type { User } from "@interface/models";
import { create } from "zustand";

interface PublicState {
    noticeOn: boolean;
    setNoticeOn: (noticeOn: boolean) => void;

    user: User | null;
    setUser: (user: User) => void;
};

export const usePublicState = create<PublicState>((set) => ({
    noticeOn: false,
    setNoticeOn: (noticeOn: boolean) => set({ noticeOn }),

    user: null,
    setUser: (user: User) => set({ user }),
}));