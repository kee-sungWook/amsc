import "@scss/pages/_adminQna.scss";
import React from "react";
import type { QnaType } from "@interface/models";
import AdminQnaLists from "@components/lists/AdminQnaLists";
import { headerJson } from "@utils/constSet";
import LoadingIndicator from "@components/LoadingIndicator";

const AdminQna: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [qnaList, setQnaList] = React.useState<QnaType[]>([]);
    const [selList, setSelList] = React.useState<number[]>([]);

    React.useEffect(() => {
        getQnaList();
    }, []);

    async function getQnaList() {
        try {
            setLoading(true);
            const response = await fetch(`/api/qna/getQnaAll`);
            const result = await response.json();
            if (!result.success) throw new Error(`${result.message}`);
            const data: QnaType[] = result.message;
            setQnaList(data);
        } catch (error) {
            console.error(`getQnaList Error : ${error}`);
        } finally {
            setLoading(false);
        }
    }

    async function updateAnswer(qnaSeq: number, answerStr: string) {
        const writeConfirm = confirm('작성된 답변을 등록 하시겠습니까?');
        if (!writeConfirm) return;
        try {
            setLoading(true);
            const sendData = { qnaSeq, answerStr }
            const res = await fetch("/api/qna/updateAnswer", {
                method: 'post',
                headers: headerJson,
                body: JSON.stringify(sendData)
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message);
            const updatedQna: QnaType = result.message;
            const newList = qnaList.map((list) => {
                if (list.seq === updatedQna.seq) {
                    return updatedQna
                } else {
                    return list
                }
            });
            setQnaList(newList);
        } catch (err) {
            console.error(`${err}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <article className="admin-qna">
            <h3>AMS Admin QnA</h3>
            {loading
                ? <LoadingIndicator size={120} />
                : <section className="list-area" style={qnaList.length > 0 ? { "justifyContent": "start" } : { "justifyContent": "center" }}>
                    {
                        qnaList.length > 0
                            ? qnaList.map((list, idx) => <AdminQnaLists
                                key={list.seq}
                                list={list}
                                number={qnaList.length - idx}
                                selList={selList}
                                setSelList={setSelList}
                                updateAnswer={updateAnswer}
                            />)
                            : <section className="nodata">등록된 목록이 없습니다.</section>
                    }
                </section>
            }
        </article>
    );
}

export default AdminQna