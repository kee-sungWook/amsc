import React from "react"
import { useErrorHandler } from "./useProcessError";
import axios from "axios";
import type { MemberModel } from "@interface/models";

export const useAdminMember = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { processError } = useErrorHandler();

    const getMembers = React.useCallback(async () => {
        setIsLoading(true);
        try {
            const result = await axios.get<MemberModel[]>("/api/member/getMembers");
            return result.data;
        } catch (err) {
            processError(err);
        } finally {
            setIsLoading(false);
        }
    }, [processError]);

    return {
        isLoading,
        getMembers,
    };
}