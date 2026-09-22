import type { OrderWithWorker } from "@interface/models";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { currencyComma, formatDate } from "@utils/supporters";
import { FaCheck, FaRegPlayCircle, FaStarOfLife } from "react-icons/fa";
import { LuClockAlert } from "react-icons/lu";
import { Fragment } from "react/jsx-runtime";
import { PiBuildingOfficeDuotone, PiPhoneDuotone, PiUserDuotone } from "react-icons/pi";
import { RiChatDeleteFill } from "react-icons/ri";
import React from "react";
import LoadingIndicator from "@components/LoadingIndicator";
// import { FiEdit } from "react-icons/fi";
import { useModalStore } from "@store/modalStore";
import ModalOrderCancel from "@components/modal/ModalOrderCancel";
import { useOrder } from "@hooks/useOrder";

interface Props {
    order: OrderWithWorker;
    index: number;
    selList: number[];
    handleOpenToggle: (seq: number) => void;
}

const MyOrderList: React.FC<Props> = ({ order, index, selList, handleOpenToggle }) => {
    const { userOrderUpdate, userOrderDelete, userOrderLoading: loading } = useOrder();
    const [ref, { height }] = useMeasure();
    const [modifyMode, setModifyMode] = React.useState(false);
    const [detailData, setDetailData] = React.useState<Record<string, any>>(JSON.parse(order.detail));
    const [title, setTitle] = React.useState(order.title);
    const submitUserOrigin = { userName: order.userName, userPhone: order.userPhone };
    const [submitUser, setSubmitUser] = React.useState<{ userName: string; userPhone: string }>(submitUserOrigin);
    const openModal = useModalStore((state) => state.openModal);

    async function handleModifyOrder() {
        try {
            const payload = {
                seq: order.seq,
                updateData: {
                    title: title,
                    detail: JSON.stringify(detailData),
                    userName: submitUser.userName,
                    userPhone: submitUser.userPhone
                }
            };
            await userOrderUpdate.mutateAsync(payload);
        } catch (e) {
            alert(`처리중 오류가 발생했습니다. : ${e}`);
            console.error(e);
        } finally {
            setModifyMode(false);
        }
    }

    async function handleDeleteOrder(orderSeq: number) {
        if (loading) return;
        const delOk = confirm("정말로 삭제 하시겠습니까?");
        if (!delOk) return;
        try {
            await userOrderDelete.mutateAsync(Number(orderSeq));
        } catch (e) {
            alert(`처리중 오류가 발생했습니다. : ${e}`);
            console.error(e);
        }
    }

    return (
        <motion.div
            initial={{ height: 82 }}
            animate={{ height: selList.includes(order.seq) ? height + 10 : 82 }}
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
                                !modifyMode && handleOpenToggle(order.seq);
                            }}
                        >
                            <img src={`/img/mem_service${order.industry}.png`} />
                            <div className="str">
                                {!modifyMode ? (
                                    <p>{title}</p>
                                ) : (
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                )}
                                <section>
                                    <div>
                                        <span>No.{index}</span>
                                        <span>{order.num}</span>
                                    </div>

                                    {order.situation !== "finish" ? (
                                        <span>신청일 : {formatDate(order.wday)}</span>
                                    ) : (
                                        <span style={{ color: "#5bba03ff" }}>
                                            완료일 : {formatDate(order.fday ?? "")}
                                        </span>
                                    )}
                                </section>
                            </div>
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
                            {order.situation === "finish" && (
                                <div className="pictogram green">
                                    <FaCheck className="icon" />
                                </div>
                            )}
                        </section>

                        {/*  취소사유 */}
                        {order.situation === "cancelReady" && (
                            <section className="cancel-reason">
                                <div className="info">
                                    <FaCheck className="icon" /> 담당 업체와 사전 논의 된 사항입니다.
                                </div>
                                <p>취소사유</p>
                                {order.cancelReason}
                            </section>
                        )}

                        <section className="submit-user">
                            <div className="info">
                                <div>
                                    <h4>
                                        <PiUserDuotone className="icon" />
                                        신청자 :
                                    </h4>
                                    <p>
                                        {modifyMode ? (
                                            <input
                                                type="text"
                                                value={submitUser.userName}
                                                onChange={(e) =>
                                                    setSubmitUser((prev) => ({ ...prev, ["userName"]: e.target.value }))
                                                }
                                            />
                                        ) : (
                                            submitUser.userName
                                        )}
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        <PiPhoneDuotone className="icon" />
                                        연락처 :
                                    </h4>
                                    <p>
                                        {modifyMode ? (
                                            <input
                                                type="text"
                                                value={submitUser.userPhone}
                                                onChange={(e) =>
                                                    setSubmitUser((prev) => ({
                                                        ...prev,
                                                        ["userPhone"]: e.target.value
                                                    }))
                                                }
                                            />
                                        ) : (
                                            submitUser.userPhone
                                        )}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="list-content">
                            {Object.entries(detailData).map(([key, value], idx) => (
                                <Fragment key={idx}>
                                    <div className="row">
                                        <div>
                                            <FaStarOfLife className="icon" />
                                            {key}
                                        </div>
                                        {!modifyMode ? (
                                            <span>{`${value}`}</span>
                                        ) : (
                                            <input
                                                type="text"
                                                value={value}
                                                name={key}
                                                onChange={(e) =>
                                                    setDetailData((prev) => ({
                                                        ...prev,
                                                        [e.target.name]: e.target.value
                                                    }))
                                                }
                                            />
                                        )}
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

                        {(order.situation === "wait" || order.situation === "play") && (
                            <section className="modify-area">
                                {!modifyMode ? (
                                    <>
                                        <button type="button" onClick={() => setModifyMode(true)}>
                                            주문서 수정
                                        </button>
                                        <button
                                            type="button"
                                            className="red"
                                            onClick={() => {
                                                order.situation === "wait"
                                                    ? handleDeleteOrder(order.seq)
                                                    : openModal({
                                                          maxWidth: 800,
                                                          content: (
                                                              <ModalOrderCancel
                                                                  orderSeq={order.seq}
                                                                  title={order.title}
                                                              />
                                                          )
                                                      });
                                            }}
                                        >
                                            {order.situation === "wait" ? "주문서 삭제" : "주문취소"}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button type="button" onClick={handleModifyOrder}>
                                            확인
                                        </button>
                                        <button
                                            type="button"
                                            className="cancel"
                                            onClick={() => {
                                                setModifyMode(false);
                                                setDetailData(JSON.parse(order.detail));
                                                setTitle(order.title);
                                            }}
                                        >
                                            취소
                                        </button>
                                    </>
                                )}
                            </section>
                        )}

                        {/* 포인트 관련 */}
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
                                    {order.payOk
                                        ? currencyComma(order.point!)
                                        : order.industry === "DE"
                                          ? new Intl.NumberFormat("ko-KR").format(Math.floor(order.price * 0.05))
                                          : new Intl.NumberFormat("ko-KR").format(Math.floor(order.price * 0.1))}
                                    <span>pt.</span>
                                </div>
                            </section>
                        )}

                        {order.img && (
                            <section className="finishImg">
                                <img src={`${import.meta.env.VITE_SITE_URL}${order.img}`} />
                            </section>
                        )}
                        <br />
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default MyOrderList;
