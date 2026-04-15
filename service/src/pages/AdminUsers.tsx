import "@scss/pages/_adminUsers.scss";
import LoadingIndicator from "@components/LoadingIndicator";
import { useAdminStore } from "@store/adminStore";
import { decodeIndustry, decodeType, formatDate } from "@utils/supporters";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
    const { amsUsers, setAmsUsers } = useAdminStore();
    const [loading, setLoading] = React.useState<boolean>(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/user/getAllUsers");
                const result = await res.json();
                if (!result.success) throw new Error(result.message);
                setAmsUsers(result.message);
            } catch (err) {
                console.error(`[AdminOrders fetch err] ${err}`);
            } finally {
                setLoading(false);
            }
        };
        if (amsUsers.length === 0) fetchUsers();
    }, [amsUsers.length]);

    return (
        <>
            <article className="admin-users">
                <h3 className="user-title">AMS Admin 가입자 현황</h3>
                {loading
                    ? <LoadingIndicator />
                    : <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>TYPE</th>
                                <th>업종</th>
                                <th>ID</th>
                                <th>이름</th>
                                <th>업체명</th>
                                <th>주소</th>
                                <th>자손</th>
                                <th>진행주문</th>
                                <th>포인트대기</th>
                                <th>포인트</th>
                                <th>가입일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {amsUsers.map((user, idx) => (
                                <tr key={user.seq} onClick={() => navigate("/admin/userView", { state: user })}>
                                    <td>{amsUsers.length - idx}</td>
                                    <td>{decodeType(user.type)}</td>
                                    <td>{decodeIndustry(user.industry)}</td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.company || '-'}</td>
                                    <td>{`${user.addr1 || '-'} ${user.addr2 || ''}`}</td>
                                    <td>{user.childCount + user.descendantCount}</td>
                                    <td>{user.activeOrderCount}</td>
                                    <td>{user.payReadyCount}</td>
                                    <td>{user.point}</td>
                                    <td>{formatDate(user.jday)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }

            </article>
        </>
    );
}

export default AdminLogin;