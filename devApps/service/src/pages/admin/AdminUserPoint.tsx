import "@scss/pages/_adminUsers.scss";
import LoadingIndicator from "@components/LoadingIndicator";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { currencyComma } from "@utils/supporters";
import { FaAngleLeft } from "react-icons/fa6";
import type { PointLog } from "@interface/models";
import MyPointList from "@components/lists/MyPointList";
import Pagination from "@components/Pagination";

const LIMIT = 10;

const AdminUserPoint: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state;
    const [logList, setLogList] = React.useState<PointLog[]>([]);
    const [page, setPage] = React.useState(1);
    const total = logList.length;
    const totalPage = Math.ceil(total / LIMIT);
    const pagedLogs = logList.slice((page - 1) * LIMIT, page * LIMIT);

    React.useEffect(() => {
        if (!userData) return;
        const getPointLog = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/user/getPointLog/${userData?.seq}`);
                const result = await response.json();
                if (!result.success) throw new Error(result.message);
                setLogList(result.message);
            } catch (err) {
                console.error(`getPointLog err ${err}`);
            } finally {
                setLoading(false);
            }
        };
        getPointLog();
    }, []);

    return (
        <>
            <article className="admin-user-point">
                <h3 className="user-title">
                    <FaAngleLeft className="icon" onClick={() => navigate("/admin/userView", { state: userData })} />
                    AMS Admin 가입자 현황
                    <FaAngleLeft className="icon" />
                </h3>
                {loading
                    ? <LoadingIndicator />
                    : <>
                        <section className="user-info">
                            <div>USER :<span>{userData.name}</span><span className="id">({userData.id})</span></div>
                            <div>포인트 :
                                <span className="red">{currencyComma(userData.point || 0)}</span>
                                <span className="pt">pt</span>
                            </div>
                        </section>
                        <section className="point-log">
                            {logList.length === 0
                                ? <div className="no-data">No Data.</div>
                                : <>
                                    {pagedLogs.map((list, idx) => <MyPointList key={list.seq} pointData={list} no={total - (page - 1) * LIMIT - idx} />)}
                                    <Pagination page={page} totalPage={totalPage} onChange={setPage} />
                                </>
                            }
                            <button className="goList" onClick={() => navigate("/admin/users")}>목록보기</button>
                        </section>
                    </>
                }
            </article>
        </>
    );
}

export default AdminUserPoint;