import React from "react";
import type { QnaType } from "@interface/models";
import { formatDate } from "@utils/supporters";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface Props {
    list: QnaType;
    number: number;
    selList: number[];
    setSelList: React.Dispatch<React.SetStateAction<number[]>>;
    updateAnswer: (qnaSeq: number, answerStr: string) => void
};

function AdminQnaLists({ list, number, selList, setSelList, updateAnswer }: Props) {
    const [ref, { height }] = useMeasure();
    const [answer, setAnswer] = React.useState<string>("");

    return (
        <motion.div
            initial={{ height: 65 }}
            animate={{ height: selList.includes(list.seq) ? height : 65 }}
            transition={{ duration: 0.25 }}
            className="admin-qna-list"
        >
            <div ref={ref}>
                <header onClick={() => setSelList((prev) => {
                    if (prev.includes(list.seq)) {
                        return prev.filter((item) => item !== list.seq);
                    } else {
                        return [...prev, list.seq];
                    }
                })}>
                    <section className="head">
                        No.{number}
                        <span>{formatDate(list.wday)}</span>

                    </section>
                    <section className="title">
                        <p>{list.question}</p>
                        {list.answer && <b>답변완료</b>}
                    </section>
                </header>

                <section className="list-body">
                    <div>
                        <span className="question">Q : </span>
                        <p className="question">{list.question}</p>
                    </div>

                    {list.answer
                        ? <>
                            <div><p className="aday">{formatDate(list.aday || '')} 일에 답변하였습니다</p></div>
                            <div>
                                <span>A : </span>
                                <p>{list.answer}</p>
                            </div>
                        </>
                        : <div>
                            <span>A : </span>
                            <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
                        </div>
                    }
                </section>

                <section className="btn-area">
                    {!list.answer && <button type="button" onClick={() => updateAnswer(list.seq, answer)}>답변 등록하기</button>}
                    <button className="close"
                        type="button"
                        onClick={() => setSelList((prev) => {
                            if (prev.includes(list.seq)) {
                                return prev.filter((item) => item !== list.seq);
                            } else {
                                return [...prev, list.seq];
                            }
                        })}
                    >닫기</button>
                </section>
            </div>
        </motion.div>
    );
}

export default AdminQnaLists;
