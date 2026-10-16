import * as repo from "@repo/repo.member.js";
import { AppError } from "@utils/err.app.js";

export const adminLogin = async (reqBody: Record<string, any>) => {
    const { memId, memPw } = reqBody;
    const res = await repo.adminLogin(memId, memPw);
    if (res.length === 0) {
        throw new AppError("MEMBER_NOT_FOUND", "[svc.member]", "해당 멤버를 찾을 수 없습니다", 404, {
            type: "admin",
            memberId: memId,
            memberPw: memPw
        });
    }
    return res[0];
};
