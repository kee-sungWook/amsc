import "@scss/pages/_adminOrders.scss";
import React from "react";
import { useAdminStore } from "@store/adminStore";
import LoadingIndicator from "@components/LoadingIndicator";
import { FaCheck } from "react-icons/fa";
import { FaAngleLeft, FaPlay } from "react-icons/fa6";
import type { OrderWithPoint } from "@interface/models";
import AdminOrderList from "@components/lists/AdminOrderList";
import { useLocation, useNavigate } from "react-router-dom";

const AdminUserOrders: React.FC = () => {
    const { amsOrders, setAmsOrders } = useAdminStore();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [playMode, setPlayMode] = React.useState<boolean>(true);
    const [selList, setSelList] = React.useState<number[]>([]);
    const location = useLocation();
    const userData = location.state;
    const navigate = useNavigate();

    const playOrders = React.useMemo(
        () => amsOrders.filter(o => o.situation !== "finish"),
        [amsOrders]
    );
    const compleOrders = React.useMemo(
        () => amsOrders.filter(o => o.situation === "finish"),
        [amsOrders]
    );

    React.useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/order/getOrderForC/${userData.seq}`);
                const result = await res.json();
                if (!result.success) throw new Error(result.message);
                setAmsOrders(result.message);
            } catch (err) {
                console.error(`[AdminOrders fetch err] ${err}`);
            } finally {
                setLoading(false);
            }
        };
        if (amsOrders.length === 0) fetchOrders();
    }, [amsOrders.length]);

    function handleOpenToggle(seq: number) {
        setSelList((prev) => {
            if (prev.includes(seq)) {
                return prev.filter((item) => item !== seq);
            } else {
                return [...prev, seq];
            }
        });
    };

    return (
        <>
            <article className="admin-user-order admin-orders">
                <h3 className="user-title">
                    <FaAngleLeft className="icon" onClick={() => navigate("/admin/userView", { state: userData })} />
                    AMS Admin 가입자 주문현황
                    <FaAngleLeft className="icon" />
                </h3>
                <section className="user-info">
                    <div>USER :<span>{userData.name}</span><span className="id">({userData.id})</span></div>
                </section>
                {loading
                    ? <LoadingIndicator />
                    : <>
                        <section className="order-menu">
                            <div className={playMode ? "" : "deselect"} onClick={() => { setPlayMode(true); setSelList([]); }}><FaPlay className="icon" />처리중</div>
                            <div className={!playMode ? "" : "deselect"} onClick={() => { setPlayMode(false); setSelList([]); }}><FaCheck className="icon" />처리완료</div>
                        </section>
                        {
                            playMode
                                ? playOrders.length === 0
                                    ? <div className="no-data">No Data.</div>
                                    : playOrders.map((order: OrderWithPoint, index: number) => (
                                        <AdminOrderList
                                            key={order.seq}
                                            order={order}
                                            index={playOrders.length - index}
                                            selList={selList}
                                            handleOpenToggle={handleOpenToggle}

                                        />
                                    ))
                                : compleOrders.length === 0
                                    ? <div className="no-data">No Data.</div>
                                    : compleOrders.map((order: OrderWithPoint, index: number) => (
                                        <AdminOrderList
                                            key={order.seq}
                                            order={order}
                                            index={compleOrders.length - index}
                                            selList={selList}
                                            handleOpenToggle={handleOpenToggle}
                                        />
                                    ))
                        }
                    </>
                }
            </article>
        </>
    );
}

export default AdminUserOrders;
