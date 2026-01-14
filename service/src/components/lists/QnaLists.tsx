import type { QnaType } from "@interface/models";
import { formatDate } from "@utils/supporters";

interface Props {
    list: QnaType;
    number: number;
};

function QnaLists({ list, number }: Props) {

    return (
        <div className="qna-list">
            <section className="no">{number}</section>
            <section className="title">{list.title}</section>
            <section className="wday">{formatDate(list.wday)}</section>
        </div>
    );
}

export default QnaLists;
