import { IoMdAddCircleOutline } from "react-icons/io";

const SetMemberLocale: React.FC = () => {
    return (
        <article className="member-pannel">
            <section className="row">
                <div className="local">서울 성동구</div>
                <div className="code">1000100</div>
                <div className="controll">
                    <button className="del">삭제</button>
                </div>
            </section>
            <section className="row">
                <div className="local-sel">
                    <select></select>
                    <select></select>
                </div>
                <div className="controll">
                    <button>확인</button>
                    <button className="cancel">취소</button>
                </div>
            </section>
            <section className="add-row">
                <div className="adder"><IoMdAddCircleOutline className="icon" /> <u>추가하기</u></div>
            </section>
        </article>
    );
}

export default SetMemberLocale;