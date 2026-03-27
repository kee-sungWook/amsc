import type { MemberModel } from "@interface/models";
import { decodeIndustry, formatDate } from "@utils/supporters";
import { FaAngleLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import React from "react";
import SetMemberLocale from "@components/SetMemberLocale";

const AdminMemberView: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const memData = location.state?.memData as MemberModel;
    const [editMode, setEditMode] = React.useState<boolean>(false);

    return (
        <article className="admin-user-view">
            <h3 className="user-title">
                <FaAngleLeft className="icon" onClick={() => navigate("/admin/members")} />
                AMS Admin 업체 현황
                <FaAngleLeft className="icon" />
            </h3>
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
                    <article className="member-pannel">
                        <section className="row">
                            <div className="name">
                                {editMode
                                    ? <input type="text" />
                                    : <>국산차</>
                                }
                            </div>
                            <div className="rate">
                                {editMode
                                    ? <input type="text" />
                                    : <span>15</span>
                                }
                                %
                            </div>
                            <div className="controll">
                                <button>수정</button>
                                <button className="del">삭제</button>
                            </div>
                        </section>
                        <section className="row">
                            <div className="name">
                                <input type="text" />
                            </div>
                            <div className="rate">
                                <input type="text" /> %
                            </div>
                            <div className="controll">
                                <button>확인</button>
                                <button className="cancel">취소</button>
                            </div>
                        </section>
                        <section className="add-row">
                            <div className="adder"><IoMdAddCircleOutline className="icon" /> <u>추가하기</u></div>
                        </section>
                    </article>
                </div>

                <div>
                    <h5>지역 :</h5>
                    <SetMemberLocale />
                </div>
            </section>
            <button className="goList" onClick={() => navigate("/admin/members")}>목록보기</button>
        </article>
    );
}

export default AdminMemberView;