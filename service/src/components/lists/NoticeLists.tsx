import type { Notice } from "@interface/models";
import "@scss/components/lists/_noticeLists.scss";
import { formatDate } from "@utils/date";

interface Props {
    list: Notice;
    number: number;
};

function NoticeLists({ list, number }: Props) {

    return (
        <div className="notice-list">
            <section className="no">{number}</section>
            <section className="title">{list.title}</section>
            <section className="writer">{list.writer ?? 'GUEST'}</section>
            <section className="wday">{formatDate(list.wday)}</section>
        </div>
    );
}

export default NoticeLists;
