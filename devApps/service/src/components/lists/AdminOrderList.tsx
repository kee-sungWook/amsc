import React from "react";
import type { OrderWithPoint } from "@interface/models";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { currencyComma, formatDate } from "@utils/supporters";
import { Fragment } from "react/jsx-runtime";
import LoadingIndicator from "@components/LoadingIndicator";
import { headerJson } from "@utils/constSet";

import { FaCheck, FaRegPlayCircle, FaStarOfLife } from "react-icons/fa";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { LuUserRoundPen, LuBadgeCheck, LuClockAlert } from "react-icons/lu";
import { TbCancel, TbReceiptTax } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import { RiChatDeleteFill } from "react-icons/ri";

interface Props {
    order: OrderWithPoint;
    index: number;
    selList: number[];
    handleOpenToggle: (seq: number) => void;
    selectedIds?: boolean;
    handleSelectListIds?: (seq: number) => void;
    handleCancelOrder?: (orderSeq: number) => Promise<void>;
}

const AdminOrderList: React.FC<Props> = ({
    order,
    index,
    selList,
    handleOpenToggle,
    selectedIds,
    handleSelectListIds,
    handleCancelOrder
}) => {
    const [ref, { height }] = useMeasure();
    const [loading, setLoading] = React.useState(false);
    const [pointEditMode, setPointEditMode] = React.useState<boolean>(false);
    const [point, setPoint] = React.useState<number>(0);

    React.useEffect(() => {
        handlePoint();
    }, []);

    function handlePoint() {
        if (order.point) {
            setPoint(order.point);
        } else {
            order.industry === "DE" ? setPoint(order.price * 0.05) : setPoint(order.price * 0.1);
        }
    }

    async function updatePoint() {
        if (point === 0) {
            alert("포인트를 정확히 입력해 주세요");
            return;
        }
        try {
            setLoading(true);
            const body = JSON.stringify({ seq: order.seq, point: point });
            const opt = { method: "post", headers: headerJson, body };
            const response = await fetch("/api/order/updatePoint", opt);
            const json = await response.json();
            if (!json.success) throw new Error(json.message);
            // const newData = amsOrders.map((el) => {
            //     if (el.seq === order.seq) {
            //         el.point = point;
            //     }
            //     return el;
            // });
            // setOrders?.((prev) =>
            //     prev.map((el) => {
            //         if (el.seq === order.seq) {
            //             el.point = point;
            //         }
            //         return el;
            //     })
            // );
        } catch (err) {
            console.error(`updatePoint - ${err}`);
        } finally {
            setLoading(false);
            setPointEditMode(false);
        }
    }

    async function payPoint() {
        if (point === 0) {
            alert("포인트를 정확히 입력해 주세요");
            return;
        }
        try {
            setLoading(true);
            const body = JSON.stringify({
                orderSeq: order.seq,
                industry: order.industry,
                descendantName: order.requesterName,
                requesterSeq: order.requester,
                point: point,
                orderNum: order.num,
                orderTitle: order.title
            });
            const opt = { method: "post", headers: headerJson, body };
            const response = await fetch("/api/order/payPoint", opt);
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            // const newData = amsOrders.map((el) => {
            //     if (el.seq === order.seq) {
            //         el.point = point;
            //         el.payOk = 1;
            //     }
            //     return el;
            // });
            // setOrders?.((prev) =>
            //     prev.map((el) => {
            //         if (el.seq === order.seq) {
            //             el.point = point;
            //             el.payOk = 1;
            //         }
            //         return el;
            //     })
            // );
        } catch (err) {
            console.error(`payPoint ${err}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <motion.div
            initial={{ height: 70 }}
            animate={{ height: selList.includes(order.seq) ? height + 10 : 70 }}
            transition={{ duration: 0.25 }}
            className="order-list"
        >
            <div ref={ref}>
                {loading ? (
                    <LoadingIndicator size={60} />
                ) : (
                    <>
                        <section
                            className="list-head"
                            onClick={() => {
                                if (!pointEditMode) handleOpenToggle(order.seq);
                            }}
                        >
                            <input
                                disabled={order.taxInvoice !== null && order.deposit !== null}
                                type="checkbox"
                                checked={selectedIds}
                                onChange={() => handleSelectListIds?.(order.seq)}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <img src={`/img/mem_service${order.industry}.png`} />
                            <div className="str">
                                <p style={order.situation === "cancel" ? { color: "#dd3aa3" } : {}}>{order.title}</p>
                                <section>
                                    <div>
                                        <span>No.{index}</span>
                                        <span>{order.num}</span>
                                    </div>

                                    {(order.situation === "waite" || order.situation === "play") && (
                                        <span>신청일 : {formatDate(order.wday)}</span>
                                    )}
                                    {order.situation === "finish" && (
                                        <span style={{ color: "#5bba03ff" }}>
                                            완료일 : {formatDate(order.fday ?? "")}
                                        </span>
                                    )}
                                    {order.situation === "cancelReady" && (
                                        <span style={{ color: "#dd3aa3" }}>
                                            취소요청일 : {formatDate(order.cancelWday ?? "")}
                                        </span>
                                    )}
                                    {order.situation === "cancel" && (
                                        <>
                                            <span>취소요청일 : {formatDate(order.cancelWday ?? "")}</span>
                                            &nbsp;
                                            <span style={{ color: "#dd3aa3" }}>
                                                취소일 : {formatDate(order.fday ?? "")}
                                            </span>
                                        </>
                                    )}
                                </section>
                            </div>
                            {order.taxInvoice && <TbReceiptTax className="taxInvoice" />}
                            {order.deposit && <LiaCoinsSolid className="deposit" />}
                            {order.payOk === 1 && <div className="payOk">포인트 지급</div>}

                            {order.situation === "wait" && (
                                <div className="pictogram orange">
                                    <>
                                        <LuClockAlert className="icon" />
                                        대기중
                                    </>
                                </div>
                            )}
                            {order.situation === "play" && (
                                <div className="pictogram blue">
                                    <>
                                        <FaRegPlayCircle className="icon" />
                                        진행중
                                    </>
                                </div>
                            )}
                            {order.situation === "cancelReady" && (
                                <div className="pictogram red">
                                    <>
                                        <RiChatDeleteFill className="icon" />
                                        취소요청
                                    </>
                                </div>
                            )}
                            {order.situation === "cancel" && (
                                <div className="pictogram red">
                                    <>
                                        <TbCancel className="icon" />
                                        취소완료
                                    </>
                                </div>
                            )}
                            {order.situation === "finish" && (
                                <div className="pictogram green">
                                    <FaCheck className="icon" />
                                </div>
                            )}
                        </section>

                        {/*  취소사유 */}
                        {(order.situation === "cancelReady" || order.situation === "cancel") && (
                            <section className="cancel-reason">
                                <div className="info">
                                    <FaCheck className="icon" /> 담당 업체와 사전 논의 된 사항입니다.
                                </div>
                                <p>취소사유</p>
                                {order.cancelReason}
                            </section>
                        )}

                        <section className="user-requester">
                            <div>
                                <h4>
                                    <LuUserRoundPen className="icon" />
                                    신청자 :
                                </h4>{" "}
                                <p>
                                    {order.userName}({order.userPhone})
                                </p>
                            </div>
                            <div>
                                <h4>
                                    <LuBadgeCheck className="icon" />
                                    담당자 :
                                </h4>{" "}
                                <p>
                                    {order.requesterName}({order.requesterPhone})
                                </p>
                            </div>
                        </section>

                        <section className="list-content">
                            {Object.entries(JSON.parse(order.detail)).map(([key, value], idx) => (
                                <Fragment key={idx}>
                                    <div className="row">
                                        <div>
                                            <FaStarOfLife className="icon" />
                                            {key}
                                        </div>
                                        <span>{`${value}`}</span>
                                    </div>
                                </Fragment>
                            ))}
                        </section>

                        {order.situation !== "wait" && (
                            <section className="agency">
                                <PiBuildingOfficeDuotone className="icon" />
                                <div className="info">
                                    <div>
                                        <p>담당업체 : </p>
                                        {order.workerCompany ?? ""} ({order.workerPhone ?? ""})
                                    </div>
                                    {order.situation == "finish" && (
                                        <div>
                                            <p>이용금액 : </p>
                                            <span>
                                                ₩{" "}
                                                {order.price ? new Intl.NumberFormat("ko-KR").format(order.price) : ""}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                        <br />

                        {order.situation === "cancelReady" && (
                            <section className="modify-area">
                                <button type="button" className="red" onClick={() => handleCancelOrder?.(order.seq)}>
                                    취소 승인
                                </button>
                            </section>
                        )}

                        <br />

                        {order.situation === "finish" && (
                            <section className="about-point">
                                <img src="/img/mypageCon_point.png" />
                                <h3>
                                    {order.payOk
                                        ? `포인트 지급완료 : `
                                        : order.point
                                          ? "지급할 포인트"
                                          : "예상 포인트 : "}
                                </h3>
                                <div>
                                    {pointEditMode ? (
                                        <input
                                            type="text"
                                            value={currencyComma(point)}
                                            onChange={(e) => setPoint(Number(e.target.value.replaceAll(",", "")))}
                                        />
                                    ) : order.payOk ? (
                                        currencyComma(order.point!)
                                    ) : (
                                        currencyComma(point)
                                    )}
                                    <span> pt.</span>
                                </div>
                                {!order.payOk && pointEditMode ? (
                                    <div className="confirm_cancel">
                                        <button type="button" className="green" onClick={updatePoint}>
                                            확인
                                        </button>
                                        <button
                                            type="button"
                                            className="cancel"
                                            onClick={() => {
                                                setPointEditMode(false);
                                                handlePoint();
                                            }}
                                        >
                                            취소
                                        </button>
                                    </div>
                                ) : (
                                    <FiEdit className="icon" onClick={() => setPointEditMode(true)} />
                                )}
                                {!pointEditMode && order.payOk === 0 && (
                                    <button type="button" onClick={payPoint}>
                                        지급하기
                                    </button>
                                )}
                            </section>
                        )}

                        {(order.taxInvoice || order.deposit) && (
                            <section className="tax-deposit">
                                {order.taxInvoice && (
                                    <div>
                                        <h4>
                                            <TbReceiptTax className="taxInvoice" />
                                            &nbsp;&nbsp;계산서 발행 :
                                        </h4>{" "}
                                        <p>{formatDate(order.taxInvoice)}</p>
                                    </div>
                                )}
                                {order.deposit && (
                                    <div>
                                        <h4>
                                            <LiaCoinsSolid className="deposit" />
                                            &nbsp;&nbsp;입금 확인 :
                                        </h4>{" "}
                                        <p>{formatDate(order.deposit)}</p>
                                    </div>
                                )}
                            </section>
                        )}

                        {order.img && (
                            <section className="finishImg">
                                <img src={order.img} />
                            </section>
                        )}
                        <br />
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default AdminOrderList;
