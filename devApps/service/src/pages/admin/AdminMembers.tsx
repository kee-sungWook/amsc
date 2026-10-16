import LoadingIndicator from "@components/LoadingIndicator";
import { decodeIndustry, formatDate } from "@utils/supporters";
import { useAdminMember } from "../../hooks/useAdminMember";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMembers: React.FC = () => {
    const { isLoading, memberList, getMembers } = useAdminMember();
    const navigate = useNavigate();

    React.useEffect(() => {
        getMembers();
    }, [getMembers]);

    return (
        <article className="admin-users">
            <h3 className="user-title">AMS Admin 업체 현황</h3>
            {isLoading
                ? <LoadingIndicator />
                : <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>업종</th>
                            <th>ID</th>
                            <th>이름</th>
                            <th>업체명</th>
                            <th>주소</th>
                            <th>진행주문</th>
                            <th>수수료율</th>
                            <th>가입일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberList.map((mem, idx) => (
                            <tr key={mem.seq} onClick={() => navigate(`/admin/memberView?memSeq=${mem.seq}`, { state: { memData: mem } })}>
                                <td>{memberList.length - idx}</td>
                                <td>{decodeIndustry(mem.industry)}</td>
                                <td>{mem.id}</td>
                                <td>{mem.name}</td>
                                <td>{mem.company || '-'}</td>
                                <td>{`${mem.addr1 || '-'} ${mem.addr2 || ''}`}</td>
                                <td>order</td>
                                <td>feerate</td>
                                <td>{formatDate(mem.jday)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </article>
    );
}

export default AdminMembers;