import "@scss/pages/_adminOrders.scss";
import React from "react";
import LoadingIndicator from "@components/LoadingIndicator";
import type { OrderWithPoint } from "@interface/models";
import AdminOrderList from "@components/lists/AdminOrderList";
import { headerJson } from "@utils/constSet";
import Pagination from "@components/Pagination";
import { useAdminOrder } from "@hooks/useAdminOrder";

const LIMIT = 10;

const AdminOrderCancel: React.FC = () => {
    const [selList, setSelList] = React.useState<number[]>([]);

    //페이징을 위한 상태 추가
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
    const totalPage = Math.ceil(total / LIMIT);
    const situation = "cancel";

    const { adminCancelOrders: cancelOrders, adminCancelOrdersFetching: loading } = useAdminOrder(
        page,
        situation,
        LIMIT
    );

    function handleOpenToggle(seq: number) {
        setSelList((prev) => {
            if (prev.includes(seq)) {
                return prev.filter((item) => item !== seq);
            } else {
                return [...prev, seq];
            }
        });
    }

    function handleSelectListIds(seq: number) {
        setSelectedIds((prev) => (prev.includes(seq) ? prev.filter((id) => id !== seq) : [...prev, seq]));
    }

    async function handleDelete() {
        if (selectedIds.length === 0) {
            alert("삭제할 목록을 선택해 주세요");
            return;
        }

        if (!confirm("삭제하시겠습니까?")) return;

        await fetch("/api/order/deleteOrder", {
            method: "post",
            headers: headerJson,
            body: JSON.stringify({ ids: selectedIds })
        });
    }

    return (
        <>
            <article className="admin-orders">
                <h3>AMS Admin 주문취소 내역</h3>

                {loading ? (
                    <LoadingIndicator />
                ) : (
                    <>
                        <section className="bulk-action">
                            선택한 목록을 :
                            <button
                                type="button"
                                className="red"
                                disabled={!cancelOrders || cancelOrders?.data.length === 0}
                                onClick={handleDelete}
                            >
                                삭제
                            </button>
                        </section>

                        {!cancelOrders || cancelOrders?.data.length === 0 ? (
                            <div className="no-data">No Data.</div>
                        ) : (
                            <>
                                {cancelOrders?.data.map((order: OrderWithPoint, index: number) => (
                                    <AdminOrderList
                                        key={order.seq}
                                        order={order}
                                        // setOrders={setOrders}
                                        index={total - (page - 1) * LIMIT - index}
                                        selList={selList}
                                        handleOpenToggle={handleOpenToggle}
                                        selectedIds={selectedIds.includes(order.seq)}
                                        handleSelectListIds={handleSelectListIds}
                                    />
                                ))}
                                <Pagination page={page} totalPage={totalPage} onChange={setPage} />
                            </>
                        )}
                    </>
                )}
            </article>
        </>
    );
};

export default AdminOrderCancel;
