import React from "react";
import Header from "@components/Header";
import "@scss/pages/_myOrder.scss";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import LoadingIndicator from "@components/LoadingIndicator";
import type { OrderWithWorker } from "@interface/models";
import { useUserStore } from "@store/publicState";
import MyOrderList from "@components/lists/MyOrderList";

const MyOrder: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { user } = useUserStore();
    const [playMode, setPlayMode] = React.useState<boolean>(true);
    const [selList, setSelList] = React.useState<number[]>([]);
    const [playOrders, setPlayOrders] = React.useState<OrderWithWorker[]>([]);
    const [compleOrders, setCompleOrders] = React.useState<OrderWithWorker[]>([]);

    React.useEffect(() => {
        fetchOrders();

    }, []);

    async function fetchOrders() {
        setLoading(true);
        try {
            const response = await fetch(`/api/order/getOrderForC/${user?.seq}`);
            const data = await response.json();
            if (!data.success) throw new Error(data.message);
            const myOrders: OrderWithWorker[] = data.message;
            setPlayOrders(myOrders.filter(order => order.situation !== 'finish'));
            setCompleOrders(myOrders.filter(order => order.situation === 'finish'));

        } catch (error) {
            console.error("Failed to fetch orders:", error);
        } finally {
            setLoading(false);
        }
    };

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
            <Header />
            <article className='mainContainer my-order'>
                <section className="top">
                    <img src='/img/titlePic_myOrder.png' alt='rent Illustration' />
                    <div className="top-txt">
                        <div className='title'><span>Order</span> Process</div>
                        <div className='content'>내가 요청한 서비스 처리 현황.</div>
                        <div className='content2'>고객님이 요청한 서비스 처리 현황을<br />한눈에 확인 하실 수 있습니다.</div>
                    </div>
                </section>

                <section className="order-menu">
                    <div className={playMode ? "" : "deselect"} onClick={() => { setPlayMode(true); setSelList([]); }}><FaPlay className="icon" />처리중</div>
                    <div className={!playMode ? "" : "deselect"} onClick={() => { setPlayMode(false); setSelList([]); }}><FaCheck className="icon" />처리완료</div>
                </section>

                {loading
                    ? <LoadingIndicator size={120} />
                    : playMode
                        ? playOrders.length === 0
                            ? <div className="no-data">No Data.</div>
                            : playOrders.map((order: OrderWithWorker, index: number) => (
                                <MyOrderList
                                    key={order.seq}
                                    order={order}
                                    index={playOrders.length - index}
                                    selList={selList}
                                    handleOpenToggle={handleOpenToggle}
                                    fetchOrders={fetchOrders}
                                />
                            ))
                        : compleOrders.length === 0
                            ? <div className="no-data">No Data.</div>
                            : compleOrders.map((order: OrderWithWorker, index: number) => (
                                <MyOrderList
                                    order={order}
                                    index={compleOrders.length - index}
                                    selList={selList}
                                    handleOpenToggle={handleOpenToggle}
                                />
                            ))
                }
            </article>
        </>
    );
}

export default MyOrder;
