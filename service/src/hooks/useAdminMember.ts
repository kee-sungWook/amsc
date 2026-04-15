import React from "react"
import { useErrorHandler } from "./useProcessError";
import axios from "axios";
import type { FeeRateModel, LocalModel, MemberModel } from "@interface/models";

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


    const getMemberBySeq = React.useCallback(async (memSeq: number): Promise<MemberModel> => {
        setIsLoading(true);
        try {
            const { data: result } = await axios.get<MemberModel>(`/api/member/getMemberBySeq/${memSeq}`);
            return result;
        } catch (err) {
            processError(err);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, [processError]);


    const insertMemFeeRate = async (data: { memSeq: number; feeName: string; feeRate: number }) => {
        try {
            setIsLoading(true);
            const { data: result } = await axios.put<FeeRateModel[]>("/api/member/insertMemFeeRate", data);
            if (!data) throw new Error("수수료율 추가에 실패했습니다.");
            return result;
        } catch (err) {
            processError(err);
        } finally {
            setIsLoading(false);
        }
    }


    const updateMemFeeRate = async (data: { seq: number; memSeq: number; feeName: string; feeRate: number }) => {
        try {
            setIsLoading(true);
            const { data: result } = await axios.put<FeeRateModel[]>("/api/member/updateMemFeeRate", data);
            if (!data) throw new Error("수수료율 수정에 실패했습니다.");
            return result;
        } catch (err) {
            processError(err);
        } finally {
            setIsLoading(false);
        }
    }


    const deleteMemFeeRate = async (seq: number): Promise<boolean> => {
        console.log("deleteMemFeeRate called with seq:", seq); // 디버깅 로그 추가
        try {
            setIsLoading(true);
            const { data: result } = await axios.delete(`/api/member/deleteMemFeeRate/${seq}`);
            if (!result) throw new Error("수수료율 삭제에 실패했습니다.");
            return result;
        } catch (err) {
            processError(err);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }


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
        getMemberBySeq,
        insertMemFeeRate,
        deleteMemFeeRate,
        insertMemLocal,
    };
}