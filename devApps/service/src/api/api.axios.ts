import axios from "axios";

export const api = axios.create({
    baseURL: "/api",
    timeout: 10000,
    withCredentials: true
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isAxiosError<{ success: boolean; message: string }>(error)) {
            const apiError = error.response?.data;
            console.error("====================================");
            console.error("[API ERROR]");
            console.error(apiError?.message);
            console.error("====================================");
            return Promise.reject(apiError);
        }
        return Promise.reject(error);
    }
);
