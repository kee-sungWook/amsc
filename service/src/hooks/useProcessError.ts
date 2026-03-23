import { isAxiosError } from "axios";
import { useCallback } from "react";

export const useErrorHandler = () => {
    const processError = useCallback((err: unknown) => {
        if (isAxiosError(err)) {
            const msg = err.response?.data?.message || "서버 통신 중 오류가 발생했습니다.";
            alert(msg);
        } else {
            alert("예기치 못한 오류가 발생했습니다.");
        }
    }, []);

    return { processError }
}