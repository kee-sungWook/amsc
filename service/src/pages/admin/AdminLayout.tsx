import "@scss/pages/_adminLayout.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TiHomeOutline, TiDownloadOutline } from "react-icons/ti";
import { LuUserRound, LuBuilding } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { TbCancel, TbMessage2Question } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

const Menus: React.FC = () => {
    const location = useLocation();
    const queryClient = useQueryClient();
    const [qnaNum, setQnaNum] = React.useState<number>(0);
    const [withdrawalNum, setwithdrawalNum] = React.useState<number>(0);
    const [orderCancelReqNum, setOrderCancelReqNum] = React.useState<number>(0);
    const navigate = useNavigate();
    const isActive = (path: string) => (location.pathname.includes(`/${path}`) ? "selected" : "");

    React.useEffect(() => {
        const es = new EventSource("/api/sse/adminSseConnect");
        es.addEventListener("SSE_EVENT", (event: MessageEvent) => {
            const data = JSON.parse(event.data);

            console.log(`event data : ${event.data}`);
            if (data.type === "qna") setQnaNum(data.data);
            if (data.type === "withdrawal") setwithdrawalNum(data.data);
            if (data.type === "orderCancelReq") {
                // 3. orderCancelReq 수신 시 뱃지 갱신 및 adminOrder 목록 자동 refetch
                setOrderCancelReqNum(data.data);
                queryClient.invalidateQueries({ queryKey: ["getAdminOrder"] });
            }
        });
        es.onerror = (err) => {
            console.error("SSE error", err);
        };

        const firstReceive = async () => {
            const res = await fetch(`/api/sse/adminSseFirstReceive`);
            const result = await res.json();
            if (!result.success) {
                console.error(`firstReceive not success ${result.message}`);
            } else {
                setQnaNum(result.message.qna);
                setwithdrawalNum(result.message.withdrawal);
                setOrderCancelReqNum(result.message.orderCancelReq);
            }
        };
        firstReceive();

        return () => es.close();
    }, []);

    return (
        <div className="admin-menus">
            <header>
                <span className="logo">AMS</span> ADMIN
            </header>
            <nav>
                <ul>
                    <li className={`${isActive("home")}`} onClick={() => navigate("home")}>
                        <TiHomeOutline className={`icon`} /> Home
                    </li>

                    <li className={`${isActive("users")}`} onClick={() => navigate("users")}>
                        <LuUserRound className={`icon`} /> 회원현황
                    </li>

                    <li className={`${isActive("defaultFeeRates")}`} onClick={() => navigate("defaultFeeRates")}>
                        <MdAttachMoney className={`icon`} /> 기본수수료율설정
                    </li>

                    <li className={`${isActive("members")}`} onClick={() => navigate("members")}>
                        <LuBuilding className={`icon`} /> 업체현황
                    </li>

                    <li className={`${isActive("orders")}`} onClick={() => navigate("orders")}>
                        <HiOutlineDocumentDuplicate className={`icon`} /> 주문내역
                        {orderCancelReqNum > 0 && <div className="badge">{orderCancelReqNum}</div>}
                    </li>

                    <li className={`${isActive("orderCancel")}`} onClick={() => navigate("orderCancel")}>
                        <TbCancel className={`icon`} /> 주문취소내역{" "}
                    </li>

                    <li className={`${isActive("qna")}`} onClick={() => navigate("qna")}>
                        <TbMessage2Question className={`icon`} /> QnA{" "}
                        {qnaNum > 0 && <div className="badge">{qnaNum}</div>}
                    </li>

                    <li className={`${isActive("withdrawal")}`} onClick={() => navigate("withdrawal")}>
                        <LiaCoinsSolid className={`icon`} /> 출금요청{" "}
                        {withdrawalNum > 0 && <div className="badge">{withdrawalNum}</div>}
                    </li>

                    <li className={`${isActive("remittance")}`} onClick={() => navigate("remittance")}>
                        <TiDownloadOutline className={`icon`} /> 송금내역
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const AdminLayout: React.FC = () => {
    return (
        <article className="admin-layout">
            <Menus />
            <Outlet />
        </article>
    );
};

export default AdminLayout;
