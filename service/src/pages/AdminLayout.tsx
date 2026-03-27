import "@scss/pages/_adminLayout.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TiLocationArrowOutline } from "react-icons/ti";
import React from "react";

const Menus: React.FC = () => {
    const location = useLocation();
    const [qnaNum, setQnaNum] = React.useState<number>(0);
    const [withdrawalNum, setwithdrawalNum] = React.useState<number>(0);
    const navigate = useNavigate();
    const isActive = (path: string) => location.pathname.includes(`/${path}`) ? 'selected' : '';

    React.useEffect(() => {
        const es = new EventSource("/api/sse/adminSseConnect");
        es.addEventListener("SSE_EVENT", (event: MessageEvent) => {
            const data = JSON.parse(event.data);

            console.log(`event data : ${event.data}`);
            if (data.type === 'qna') setQnaNum(data.data);
            if (data.type === 'withdrawal') setwithdrawalNum(data.data);
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
                        <TiLocationArrowOutline className={`icon`} /> Home
                    </li>

                    <li className={`${isActive("user")}`} onClick={() => navigate("users")}>
                        <TiLocationArrowOutline className={`icon`} /> 회원현황
                    </li>

                    <li className={`${isActive("member")}`} onClick={() => navigate("members")}>
                        <TiLocationArrowOutline className={`icon`} /> 업체현황
                    </li>

                    <li className={`${isActive("orders")}`} onClick={() => navigate("orders")}>
                        <TiLocationArrowOutline className={`icon`} /> 주문내역
                    </li>

                    <li className={`${isActive("qna")}`} onClick={() => navigate("qna")}>
                        <TiLocationArrowOutline className={`icon`} /> QnA {qnaNum > 0 && <div className="badge">{qnaNum}</div>}
                    </li>

                    <li className={`${isActive("withdrawal")}`} onClick={() => navigate("withdrawal")}>
                        <TiLocationArrowOutline className={`icon`} /> 출금요청 {withdrawalNum > 0 && <div className="badge">{withdrawalNum}</div>}
                    </li>

                    <li className={`${isActive("remittance")}`} onClick={() => navigate("remittance")}>
                        <TiLocationArrowOutline className={`icon`} /> 송금내역
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
}

export default AdminLayout;