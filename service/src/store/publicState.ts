import type { User } from "@interface/models";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PublicState {
    noticeOn: boolean;
    setNoticeOn: (noticeOn: boolean) => void;
};

export const usePublicState = create<PublicState>((set) => ({
    noticeOn: false,
    setNoticeOn: (noticeOn: boolean) => set({ noticeOn }),
}));

interface UserStore {
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;

    user: User | null;
    setUser: (user: User) => void;

    setUserClear: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            loggedIn: false,
            setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),

            user: null,
            setUser: (user: User) => set({ user }),

            setUserClear: () => set({
                loggedIn: false,
                user: null,
            }),
        }),
        {
            name: "ams-user"
        }

    )
);