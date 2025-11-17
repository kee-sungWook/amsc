import "@scss/pages/_noticePage.scss";
import Header from "@components/Header";
import { FaRegEdit } from "react-icons/fa";
import { usePublicState } from "@store/publicState";
import NoticeWindow from "@components/NoticeWindow";
import NoticeLists from "@components/lists/NoticeLists";
import type { Notice } from "@interface/models";
import { useEffect, useState } from "react";
function NoticePage() {
    const { noticeOn, setNoticeOn, user } = usePublicState();
    const [noticeList, setNoticeList] = useState<Notice[]>([]);

    useEffect(() => {
        getNoticeList();
    }, []);

    async function getNoticeList() {
        try {
            const response = await fetch("/api/notice/getNotice");
            const result = await response.json();
            if (!result.success) throw new Error(`${result.message}`);
            const data: Notice[] = result.message;
            setNoticeList(data);
        } catch (error) {
            console.error(`getNoticeList Error : ${error}`);
        }
    }

    async function insertData(noticeTitle: string, noticeContent: string) {
        console.log(`NoticePage - insertData()`);
        try {
            const response = await fetch("/api/notice/insertNotice", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: noticeTitle,
                    content: noticeContent,
                    writer: user?.seq ?? null
                }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            getNoticeList();
        } catch (error) {
            console.error(`[NoticeWindow insertNotice Error] ${error}`);
        }
    }

    return (
        <>
            {noticeOn && <NoticeWindow insertData={insertData} />}
            <Header />

            <article className="notice-page">
                <div className="notice-page-container">
                    <section className="notice-page-title">
                        <img src="/img/qna.png" />
                        <div className="title">
                            <div className="main">문의하기 <span>QnA</span></div>
                            <div className="sub">문의하신 궁금사항에 대해 정성껏 답변해 드리겠습니다.</div>
                        </div>
                    </section>

                    <section className="list-area" style={noticeList.length > 0 ? { "justifyContent": "start" } : { "justifyContent": "center" }}>
                        {
                            noticeList.length > 0
                                ? noticeList.map((list, idx) => <NoticeLists key={list.seq} list={list} number={noticeList.length - idx} />)
                                : <section className="nodata">등록된 목록이 없습니다.</section>
                        }
                    </section>

                    <section className="write-btn-area">
                        <div onClick={() => setNoticeOn(true)}>
                            <FaRegEdit className="icon" />
                            <span>문의작성</span>
                        </div>
                    </section>
                </div>
            </article>

        </>
    );
}

export default NoticePage;
