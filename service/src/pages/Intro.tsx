import LogoArea from "@components/LogoArea";
import "@scss/pages/_intro.scss";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();
    return (
        <article className="intro">
            <section className="head">
                <LogoArea />
                <div className="textContent">
                    <div className="line1">
                        품격 있는 서비스 경험에, 가치 있는 <span>리워드</span>를 더하다.
                    </div>
                    <div className="line2">
                        편안함을 누리는 순간, 혜택도 함께 돌아옵니다.
                    </div>
                </div>
            </section>
            <img src="/img/intro_img.png" />
            <section className="btnArea">
                <button type="button" onClick={() => navigate("/login")}>로그인</button>
                <button type="button" onClick={() => navigate("/join")}>회원가입</button>
                <button type="button" onClick={() => navigate("/service")}>서비스신청</button>
                <button type="button" onClick={() => navigate("/main")}>둘러보기</button>
            </section>
        </article>
    );
}

export default Intro;