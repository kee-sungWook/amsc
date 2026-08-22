import type { MemberModel } from "@interface/models";
import { decodeIndustry, formatDate } from "@utils/supporters";
import { FaAngleLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import MemLocal from "@components/MemLocal";
import { useAdminMember } from "../../hooks/useAdminMember";
import LoadingIndicator from "@components/LoadingIndicator";
import MemFeeRate from "@components/MemFeeRate";


const AdminMemberView: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const { isLoading, getMemberBySeq, insertMemFeeRate, updateMemFeeRate, deleteMemFeeRate, insertMemLocal, updateMemLocal, deleteMemLocal } = useAdminMember();
    const memSeq = queryParam.get("memSeq");
    const [memData, setMemData] = React.useState(location.state?.memData as MemberModel);


    const getMemData = React.useCallback(async () => {
        const data = await getMemberBySeq(Number(memSeq));
        if (data) setMemData(data);
    }, [memSeq, getMemberBySeq]);

    useEffect(() => {
        if (!memData) getMemData();
    }, [getMemData]);

    return (
        <article className="admin-user-view">
            <h3 className="user-title">
                <FaAngleLeft className="icon" onClick={() => navigate("/admin/members")} />
                AMS Admin 업체 현황
                <FaAngleLeft className="icon" />
            </h3>
            {isLoading
                ? <LoadingIndicator />
                : <>
                    <section className="main-container">
                        <div>
                            <h5>업종 :</h5>
                            <span>{decodeIndustry(memData.industry)}</span>
                        </div>
                        <div>
                            <h5>ID :</h5>
                            <span>{memData.id}</span>
                        </div>
                        <div>
                            <h5>이름 :</h5>
                            <span>{memData.name}</span>
                        </div>
                        <div>
                            <h5>이메일 :</h5>
                            <span>{memData.email || "-"}</span>
                        </div>
                        <div>
                            <h5>전화번호 :</h5>
                            <span>{memData.phone}</span>
                        </div>
                        <div>
                            <h5>업체명 :</h5>
                            <span>{memData.company || '-'}</span>
                        </div>
                        <div>
                            <h5>사업자번호 :</h5>
                            <span>{memData.businessNum || '-'}</span>
                        </div>
                        <div>
                            <h5>주소 :</h5>
                            <span>{memData.addr1 || ''} {memData.addr2 || ''}</span>
                        </div>
                        <div>
                            <h5>가입일자 :</h5>
                            <span>{formatDate(memData.jday)}</span>
                        </div>
                        <div>
                            <h5>수수료율 :</h5>
                            <MemFeeRate
                                memData={memData}
                                setMemData={setMemData}
                                insertMemFeeRate={insertMemFeeRate}
                                updateMemFeeRate={updateMemFeeRate}
                                deleteMemFeeRate={deleteMemFeeRate}
                            />
                        </div>

                        <div>
                            <h5>지역 :</h5>
                            <MemLocal
                                memData={memData}
                                setMemData={setMemData}
                                insertMemLocal={insertMemLocal}
                                updateMemLocal={updateMemLocal}
                                deleteMemLocal={deleteMemLocal}
                            />
                        </div>
                    </section>
                    <button className="goList" onClick={() => navigate("/admin/members")}>목록보기</button>
                </>
            }
        </article>
    );
}

export default AdminMemberView;