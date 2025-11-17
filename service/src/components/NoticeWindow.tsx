import "@scss/components/_noticeWindow.scss";
import { CgCloseR } from "react-icons/cg";
import { useRef, useState } from "react";
import { usePublicState } from "@store/publicState";

interface Props {
    insertData: (noticeTitle: string, noticeContent: string) => void;
}

function NoticeWindow({ insertData }: Props) {
    const [noticeTitle, setNoticeTitle] = useState<string>('');
    const [noticeContent, setNoticeContent] = useState<string>('');
    const [user] = useState<string>('GUEST');
    const { setNoticeOn } = usePublicState();
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    async function insertNotice() {
        if (noticeTitle.trim() === '') {
            alert('제목을 입력해 주세요');
            titleRef.current!.focus();
            return;
        }
        if (noticeContent.trim() === '') {
            alert('내용을 입력해 주세요');
            contentRef.current!.focus();
            return;
        }
        insertData(noticeTitle.trim(), noticeContent.trim());
    }

    return (
        <article className="notice-area">
            <form className="notice-pannel">
                <section className="writer">
                    <span>작성자 : </span>{user}
                    <CgCloseR className="close-btn" onClick={() => setNoticeOn(false)} />
                </section>
                <section>
                    <input
                        type="text"
                        ref={titleRef}
                        placeholder="제목입력"
                        value={noticeTitle}
                        onChange={(e) => setNoticeTitle(e.target.value)}
                    />
                </section>
                <section>
                    <textarea
                        placeholder="내용입력"
                        ref={contentRef}
                        value={noticeContent}
                        onChange={(e) => setNoticeContent(e.target.value)}
                    />
                </section>
                <section>
                    <button type="button" onClick={insertNotice}>문의입력</button>
                    <button type="button" className="cancel" onClick={() => setNoticeOn(false)}>취소</button>
                </section>
            </form>
        </article>
    );
}

export default NoticeWindow;
