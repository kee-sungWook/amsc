import "@scss/pages/_qna.scss";
import Header from "@components/Header";
import { FaRegEdit } from "react-icons/fa";
import { usePublicState, useUserStore } from "@store/publicState";
import QnaWindow from "@components/QnaWindow";
import QnaLists from "@components/lists/QnaLists";
import type { QnaType } from "@interface/models";
import { useEffect, useState } from "react";
import LoadingIndicator from "@components/LoadingIndicator";

const Qna: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { qnaOn, setQnaOn } = usePublicState();
    const { user } = useUserStore();
    const [qnaList, setQnaList] = useState<QnaType[]>([]);
    const [selList, setSelList] = useState<number[]>([]);

    useEffect(() => {
        getQnaList();
    }, []);

    async function getQnaList() {
        try {
            setLoading(true);
            const response = await fetch(`/api/qna/getQna/${user?.seq}`);
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

    async function insertData(qnaTitle: string, qnaContent: string) {
        try {
            const response = await fetch("/api/qna/insertQna", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: qnaTitle,
                    question: qnaContent,
                    writer: user?.seq
                }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            alert(`문의가 등록되었습니다.`);
            getQnaList();
            setQnaOn(false);
        } catch (error) {
            console.error(`[QnaWindow insertQna Error] ${error}`);
        }
    }

    return (
        <>
            {qnaOn && <QnaWindow insertData={insertData} />}
            <Header />

            <article className="qna-page">
                <div className="qna-page-container">
                    <section className="qna-page-title">
                        <img src="/img/titlePic_qna.png" />
                        <div className="title">
                            <div className="main">문의하기 <span>QnA</span></div>
                            <div className="sub">문의하신 궁금사항에 대해 정성껏 답변해 드리겠습니다.</div>
                        </div>
                    </section>

                    {loading
                        ? <LoadingIndicator size={120} />
                        : <>
                            <section className="list-area" style={qnaList.length > 0 ? { "justifyContent": "start" } : { "justifyContent": "center" }}>
                                {
                                    qnaList.length > 0
                                        ? qnaList.map((list, idx) => <QnaLists
                                            key={list.seq}
                                            list={list}
                                            number={qnaList.length - idx}
                                            selList={selList}
                                            setSelList={setSelList}
                                        />)
                                        : <section className="nodata">등록된 목록이 없습니다.</section>
                                }
                            </section>

                            <section className="write-btn-area">
                                <div onClick={() => setQnaOn(true)}>
                                    <FaRegEdit className="icon" />
                                    <span>문의작성</span>
                                </div>
                            </section>
                        </>
                    }
                </div>
            </article>

        </>
    );
}

export default Qna;
