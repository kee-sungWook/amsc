import "@scss/pages/_adminOrders.scss";
import React from "react";
import LoadingIndicator from "@components/LoadingIndicator";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import type { OrderWithPoint } from "@interface/models";
import AdminOrderList from "@components/lists/AdminOrderList";
import { headerJson } from "@utils/constSet";
import Pagination from "@components/Pagination";

const LIMIT = 10;

const AdminOrders: React.FC = () => {
    const [orders, setOrders] = React.useState<OrderWithPoint[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [playMode, setPlayMode] = React.useState<boolean>(true);
    const [selList, setSelList] = React.useState<number[]>([]);

    //페이징을 위한 상태 추가
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
    const totalPage = Math.ceil(total / LIMIT);



    const fetchOrders = React.useCallback(async () => {
        try {
            setLoading(true);

            const situation = playMode ? "play" : "finish";
            const res = await fetch(
                `/api/order/getOrderForAdmin?page=${page}&limit=${LIMIT}&situation=${situation}`
            );

            const result = await res.json();
            if (!result.success) throw new Error(result.message);

            setOrders(result.data);
            setTotal(result.total);
            setSelectedIds([]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [page, playMode]);

    React.useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);



    function handleOpenToggle(seq: number) {
        setSelList((prev) => {
            if (prev.includes(seq)) {
                return prev.filter((item) => item !== seq);
            } else {
                return [...prev, seq];
            }
        });
    };

    function handleSelectListIds(seq: number) {
        setSelectedIds((prev) =>
            prev.includes(seq)
                ? prev.filter((id) => id !== seq)
                : [...prev, seq]
        )
    }

    async function handleDelete() {
        if (selectedIds.length === 0) return;

        if (!confirm("삭제하시겠습니까?")) return;

        await fetch("/api/order/deleteOrder", {
            method: "post",
            headers: headerJson,
            body: JSON.stringify({ ids: selectedIds })
        });

        fetchOrders();
    }

    async function handleTaxInvoice() {
        if (selectedIds.length === 0) return;

        await fetch("/api/order/taxInvoice", {
            method: "post",
            headers: headerJson,
            body: JSON.stringify({ ids: selectedIds })
        });

        fetchOrders();
    }

    async function handleDeposit() {
        if (selectedIds.length === 0) return;

        await fetch("/api/order/deposit", {
            method: "post",
            headers: headerJson,
            body: JSON.stringify({ ids: selectedIds })
        });

        fetchOrders();
    }

    return (
        <>
            <article className="admin-orders">
                <h3>AMS Admin 주문내역</h3>

                <section className="order-menu">
                    <div
                        className={playMode ? "" : "deselect"}
                        onClick={() => { setPlayMode(true); setSelList([]); setPage(1); }}
                    >
                        <FaPlay className="icon" />처리중
                    </div>
                    <div
                        className={!playMode ? "" : "deselect"}
                        onClick={() => { setPlayMode(false); setSelList([]); setPage(1); }}
                    >
                        <FaCheck className="icon" />처리완료
                    </div>
                </section>
                {loading
                    ? <LoadingIndicator />
                    : <>
                        {playMode
                            ? <section className="bulk-action">
                                선택한 목록을 :
                                <button type="button" className="red" onClick={handleDelete}>삭제</button>
                            </section>
                            :
                            <section className="bulk-action">
                                선택한 목록을 :
                                {/* <button type="button" className="red" onClick={handleDelete}>삭제</button> */}
                                <button type="button" onClick={handleTaxInvoice}>계산서발행완료</button>
                                <button type="button" className="orange" onClick={handleDeposit}>입금확인</button>
                            </section>
                        }
                        {orders.length === 0
                            ? <div className="no-data">No Data.</div>
                            : <>
                                {orders.map((order: OrderWithPoint, index: number) => (
                                    <AdminOrderList
                                        key={order.seq}
                                        order={order}
                                        index={total - (page - 1) * LIMIT - index}
                                        selList={selList}
                                        handleOpenToggle={handleOpenToggle}
                                        selectedIds={selectedIds.includes(order.seq)}
                                        handleSelectListIds={handleSelectListIds}

                                    />
                                ))}
                                <Pagination
                                    page={page}
                                    totalPage={totalPage}
                                    onChange={setPage}
                                />
                            </>
                        }
                    </>
                }
            </article>
        </>
    );
}

export default AdminOrders;
