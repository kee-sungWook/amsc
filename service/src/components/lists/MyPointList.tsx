import React from "react";
import { currencyComma, formatDate, formatDateTime } from "@utils/supporters";
import type { PointLog } from "@interface/models";

interface Props {
    pointData: PointLog;
    no: number;
}

const MyPointList: React.FC<Props> = ({ pointData, no }) => {
    const [mainSubject, setMainSubject] = React.useState<string>("");
    const [secondSubject, setSecondSubject] = React.useState<string>("");

    React.useEffect(() => {
        if (pointData.utilize === "받음") {
            const [subjects, ...rest] = pointData.subject.split(" ");
            setMainSubject(subjects);
            setSecondSubject(rest.join(" "));
        } else {
            const subjects = pointData.subject.split("/");
            setMainSubject(subjects[0] || "");
            setSecondSubject(subjects[1] || " ");
        }
    }, []);

    return (
        <section className="point-list">
            <div className="no">{no}</div>
            <div className="content">
                <div>
                    <section className="day-amount">
                        <span className="day">{formatDate(pointData.wday)}</span>

                        <span className={
                            pointData.utilize === "출금요청"
                                ? "utilize green"
                                : pointData.utilize === '출금완료'
                                    ? "utilize blue"
                                    : "utilize"
                        }>
                            {pointData.utilize}
                        </span>

                        <span className={
                            pointData.utilize === "출금요청"
                                ? "amount green"
                                : pointData.utilize === '출금완료'
                                    ? "amount blue"
                                    : "amount red"
                        }>
                            {currencyComma(pointData.amount)}
                        </span>
                    </section>

                    <section className="subject">
                        <span>{mainSubject}</span>송금일: {formatDateTime(pointData.eday!)}
                    </section>
                </div>
                <p>잔액 : <span>{currencyComma(pointData.balance)}</span></p>
            </div>
        </section>
    );
};

export default MyPointList;