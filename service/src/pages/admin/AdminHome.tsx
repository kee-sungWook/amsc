import LoadingIndicator from "@components/LoadingIndicator";
import "@scss/pages/_adminHome.scss";
import { useAdminStore } from "@store/adminStore";
import React from "react";

const AdminHome: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { amsUsers, amsOrders, setAmsUsers, setAmsOrders } = useAdminStore();

    React.useEffect(() => {
        if (amsUsers.length > 0 && amsOrders.length > 0) return;
        const fetchAll = async () => {
            try {
                setLoading(true);
                const [usersRes, ordersRes] = await Promise.all([
                    fetch("/api/user/getAllUsers"),
                    fetch("/api/order/getAllOrders")
                ]);
                const usersJson = await usersRes.json();
                const ordersJson = await ordersRes.json();
                if (!usersJson.success || !ordersJson.success) throw new Error("Fetch failed");
                setAmsUsers(usersJson.message);
                setAmsOrders(ordersJson.message);
            } catch (err) {
                console.error("[adminHome fetch]", err);
            } finally {
                setLoading(false);
            }
        }
        fetchAll();
    }, []);


    return (
        <article className="admin-home">
            <h3>AMS Admin HOME</h3>
            {loading
                ? <LoadingIndicator />
                : <section className="admin-pannel-area">
                    <div className="admin-pannel">
                        <img src="/img/titlePic_mypage.png" />
                        <div className="pannel-head">
                            <h4>가입자 현황</h4>
                            <span>{amsUsers.length}</span>
                        </div>
                        <div className="pannel-list">
                            <h5>업체</h5>
                            <span>{amsUsers.filter((list) => list.type === "b").length}</span>
                        </div>
                        <div className="pannel-list">
                            <h5>영업자</h5>
                            <span>{amsUsers.filter((list) => list.type === "y").length}</span>
                        </div>
                        <div className="pannel-list">
                            <h5>운전자</h5>
                            <span>{amsUsers.filter((list) => list.type === "c").length}</span>
                        </div>
                    </div>

                    <div className="admin-pannel">
                        <img src="/img/titlePic_myOrder.png" />
                        <div className="pannel-head">
                            <h4>주문 현황</h4>
                            <span>{amsOrders.length}</span>
                        </div>
                        <div className="pannel-list">
                            <h5>대기중</h5>
                            <span>{amsOrders.filter((list) => list.situation === "wait").length}</span>
                        </div>
                        <div className="pannel-list">
                            <h5>진행중</h5>
                            <span>{amsOrders.filter((list) => list.situation === "play").length}</span>
                        </div>
                        <div className="pannel-list">
                            <h5>완료</h5>
                            <span>{amsOrders.filter((list) => list.situation === "finish").length}</span>
                        </div>
                    </div>
                </section>
            }


        </article>
    );
}

export default AdminHome;