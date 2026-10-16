import React from "react";
import Header from "@components/Header";
import "@scss/pages/_myorder.scss";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import LoadingIndicator from "@components/LoadingIndicator";
import type { OrderWithWorker } from "@interface/models";
// import { useUserStore } from "@store/publicState";
import MyOrderList from "@components/lists/MyOrderList";
import { useOrder } from "@hooks/useOrder";
import Pagination from "@components/Pagination";

const LIMIT = 10;

const MyOrder: React.FC = () => {
    const { userOrderList, userOrderLoading: loading } = useOrder();
    const [playMode, setPlayMode] = React.useState<boolean>(true);
    const [selList, setSelList] = React.useState<number[]>([]);
    const [page, setPage] = React.useState(1);

    // React.useEffect(() => {
    //     fetchOrders();

    // }, []);

    // async function fetchOrders() {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`/api/order/getOrderForC/${user?.seq}`);
    //         const data = await response.json();
    //         if (!data.success) throw new Error(data.message);
    //         const myOrders: OrderWithWorker[] = data.message;
    //         setPlayOrders(myOrders.filter(order => order.situation !== 'finish'));
    //         setCompleOrders(myOrders.filter(order => order.situation === 'finish'));

    //     } catch (error) {
    //         console.error("Failed to fetch orders:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // 처리중/처리완료 탭에 맞는 목록 (전체 목록을 받아 클라이언트에서 페이징)
    const filteredOrders = React.useMemo(
        () =>
            (userOrderList ?? []).filter((order) =>
                playMode ? order.situation !== "finish" : order.situation === "finish"
            ),
        [userOrderList, playMode]
    );
    const total = filteredOrders.length;
    const totalPage = Math.ceil(total / LIMIT);
    const pagedOrders = filteredOrders.slice((page - 1) * LIMIT, page * LIMIT);

    // 삭제 등으로 마지막 페이지가 비면 이전 페이지로 이동
    React.useEffect(() => {
        if (totalPage > 0 && page > totalPage) setPage(totalPage);
    }, [page, totalPage]);

    function handleOpenToggle(seq: number) {
        setSelList((prev) => {
            if (prev.includes(seq)) {
                return prev.filter((item) => item !== seq);
            } else {
                return [...prev, seq];
            }
        });
    }

    console.log("userOrderList : ", userOrderList);

    return (
        <>
            <Header />
            <article className="mainContainer my-order">
                <section className="top">
                    <img src="/img/titlePic_myOrder.png" alt="rent Illustration" />
                    <div className="top-txt">
                        <div className="title">
                            <span>Order</span> Process
                        </div>
                        <div className="content">내가 요청한 서비스 처리 현황.</div>
                        <div className="content2">
                            고객님이 요청한 서비스 처리 현황을
                            <br />
                            한눈에 확인 하실 수 있습니다.
                        </div>
                    </div>
                </section>

                <section className="order-menu">
                    <div
                        className={playMode ? "" : "deselect"}
                        onClick={() => {
                            setPlayMode(true);
                            setSelList([]);
                            setPage(1);
                        }}
                    >
                        <FaPlay className="icon" />
                        처리중
                    </div>
                    <div
                        className={!playMode ? "" : "deselect"}
                        onClick={() => {
                            setPlayMode(false);
                            setSelList([]);
                            setPage(1);
                        }}
                    >
                        <FaCheck className="icon" />
                        처리완료
                    </div>
                </section>

                {loading ? (
                    <LoadingIndicator size={120} />
                ) : total === 0 ? (
                    <div className="common-no-data">No Data.</div>
                ) : (
                    <>
                        {pagedOrders.map((order: OrderWithWorker, index: number) => (
                            <MyOrderList
                                key={order.seq}
                                order={order}
                                index={total - (page - 1) * LIMIT - index}
                                selList={selList}
                                handleOpenToggle={handleOpenToggle}
                            />
                        ))}
                        <Pagination page={page} totalPage={totalPage} onChange={setPage} />
                    </>
                )}
            </article>
        </>
    );
};

export default MyOrder;
