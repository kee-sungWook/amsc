import { CgCloseR } from "react-icons/cg";
import { useRef, useState } from "react";
import { usePublicState, useUserStore } from "@store/publicState";

interface Props {
    insertData: (qnaTitle: string, qnaContent: string) => void;
}

function QnaWindow({ insertData }: Props) {
    const [qnaTitle, setQnaTitle] = useState<string>('');
    const [qnaContent, setQnaContent] = useState<string>('');
    const { user } = useUserStore();
    const { setQnaOn } = usePublicState();
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    async function insertQna() {
        if (qnaTitle.trim() === '') {
            alert('제목을 입력해 주세요');
            titleRef.current!.focus();
            return;
        }
        if (qnaContent.trim() === '') {
            alert('내용을 입력해 주세요');
            contentRef.current!.focus();
            return;
        }
        insertData(qnaTitle.trim(), qnaContent.trim());
    }

    return (
        <article className="qna-window">
            <form className="qna-pannel">
                <section className="writer">
                    <span>작성자 : </span>{user?.name || 'no data'}
                    <CgCloseR className="close-btn" onClick={() => setQnaOn(false)} />
                </section>
                <section>
                    <input
                        type="text"
                        ref={titleRef}
                        placeholder="제목입력"
                        value={qnaTitle}
                        onChange={(e) => setQnaTitle(e.target.value)}
                    />
                </section>
                <section>
                    <textarea
                        placeholder="내용입력"
                        ref={contentRef}
                        value={qnaContent}
                        onChange={(e) => setQnaContent(e.target.value)}
                    />
                </section>
                <section>
                    <button type="button" onClick={insertQna}>문의입력</button>
                    <button type="button" className="cancel" onClick={() => setQnaOn(false)}>취소</button>
                </section>
            </form>
        </article>
    );
}

export default QnaWindow;
