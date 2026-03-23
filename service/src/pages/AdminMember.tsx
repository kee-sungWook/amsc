import LoadingIndicator from "@components/LoadingIndicator";
import { useAdminMember } from "hooks/useAdminMember";
import React from "react";

const AdminMember: React.FC = () => {
    const { isLoading, getMembers } = useAdminMember();

    React.useEffect(() => {
        getMembers();
    }, [getMembers]);

    return (
        <article className="admin-users">
            <h3 className="user-title">AMS Admin 가입자 현황</h3>
            {isLoading
                ? <LoadingIndicator />
                : <table>
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
                </table>
            }
        </article>
    );
}

export default AdminMember;