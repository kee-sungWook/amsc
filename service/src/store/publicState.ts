import type { User } from "@interface/models";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PublicState {
    qnaOn: boolean;
    setQnaOn: (qnaOn: boolean) => void;
};

export const usePublicState = create<PublicState>((set) => ({
    qnaOn: false,
    setQnaOn: (qnaOn: boolean) => set({ qnaOn }),
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
            name: "ams-user",
            storage: createJSONStorage(() => sessionStorage)
        }

    )
);
