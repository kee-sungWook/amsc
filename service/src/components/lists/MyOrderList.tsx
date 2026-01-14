import type { OrderWithWorker } from "@interface/models";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { formatDate } from "@utils/supporters";
import { FaCheck, FaRegPlayCircle, FaStarOfLife } from "react-icons/fa";
import { LuClockAlert } from "react-icons/lu";
import { Fragment } from "react/jsx-runtime";
import { PiBuildingOfficeDuotone } from "react-icons/pi";

interface Props {
    order: OrderWithWorker;
    index: number;
    selList: number[];
    handleOpenToggle: (seq: number) => void;
}

const MyOrderList: React.FC<Props> = ({ order, index, selList, handleOpenToggle }) => {
    const [ref, { height }] = useMeasure();
    return (
        <motion.div
            initial={{ height: 82 }}
            animate={{ height: selList.includes(order.seq) ? (height + 10) : 82 }}
            transition={{ duration: 0.25 }}
            className="order-list"
        >
            <div ref={ref}>
                <section className="list-head" onClick={() => handleOpenToggle(order.seq)}>
                    <img src={`/img/mem_service${order.industry}.png`} />
                    <div className="str">
                        <p>{order.title}</p>
                        <section>
                            <div>
                                <span>No.{index}</span>
                                <span>{order.num}</span>
                            </div>

                            {order.situation !== 'finish'
                                ? <span>신청일 : {formatDate(order.wday)}</span>
                                : <span style={{ color: "#5bba03ff" }}>완료일 : {formatDate(order.fday ?? '')}</span>
                            }
                        </section>
                    </div>
                    {order.situation !== 'finish'
                        ? <div className={`pictogram ${order.situation === 'wait' ? 'red' : 'blue'}`}>
                            {order.situation === 'wait'
                                ? <><LuClockAlert className="icon" />대기중</>
                                : <><FaRegPlayCircle className="icon" />진행중</>
                            }
                        </div>
                        :
                        <div className="pictogram green">
                            <FaCheck className="icon" />
                        </div>
                    }
                </section>

                <section className="list-content">
                    {Object.entries(JSON.parse(order.detail)).map(([key, value], idx) => (
                        <Fragment key={idx}>
                            <div className="row">
                                <div><FaStarOfLife className="icon" />{key}</div>
                                <span>{`${value}`}</span>
                            </div>
                        </Fragment>
                    ))}
                </section>

                {order.situation !== 'wait' &&
                    <section className="agency">
                        <PiBuildingOfficeDuotone className="icon" />
                        <div className="info">
                            <div><p>담당업체 : </p>{order.workerCompany ?? ''} ({order.workerPhone ?? ''})</div>
                            {order.situation == 'finish' && <div><p>이용금액 : </p><span>₩ {order.price ? new Intl.NumberFormat("ko-KR").format(order.price) : ''}</span></div>}
                        </div>
                    </section>
                }
                <br />

                {order.img && <section className="finishImg"><img src={`${import.meta.env.VITE_SITE_URL}${order.img}`} /></section>}
                <br />
            </div>
        </motion.div>
    );
};

export default MyOrderList;