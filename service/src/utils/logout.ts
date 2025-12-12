import { useUserStore } from "@store/publicState";

export function logout() {
    const { setUserClear } = useUserStore.getState();
    setUserClear();
    sessionStorage.clear();
}