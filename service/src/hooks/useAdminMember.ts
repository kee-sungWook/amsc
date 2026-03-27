import React from "react"
import { useErrorHandler } from "./useProcessError";
import axios from "axios";
import { type LocalModel, type MemberModel } from "@interface/models";

export const useAdminMember = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [memberList, setMemberList] = React.useState<MemberModel[]>([]);
    const { processError } = useErrorHandler();

    const getMembers = React.useCallback(async () => {
        setIsLoading(true);
        try {
            const result = await axios.get<MemberModel[]>("/api/member/getMembers");
            setMemberList(result.data);
        } catch (err) {
            processError(err);
        } finally {
            setIsLoading(false);
        }
    }, [processError]);

    const insertMemLocal = async (data: any) => {
        try {
            setIsLoading(true);
            const result = await axios.put<LocalModel[]>("/api/member/insertMemLocal", data);
            return result.data;
        } catch (err) {
            processError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        memberList,
        getMembers,
        insertMemLocal,
    };
}