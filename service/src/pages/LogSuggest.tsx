import Header from "@components/Header";
import "@scss/pages/_logSuggest.scss";
import { FiUserPlus } from "react-icons/fi";
import { PiBackspaceDuotone, PiPowerBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const LogSuggest = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <article className="log-suggest">
                <section className="info">
                    <img src="/img/log_suggest.png" alt="로그제안" />
                    <span>로그인 후 이용할 수 있는 페이지 입니다.</span>
                </section>

                <section className="go-group">
                    <button type="button" onClick={() => navigate("/login")}><PiPowerBold className="icon" />로그인</button>
                    <button type="button" onClick={() => navigate("/join")}><FiUserPlus className="icon" />회원가입</button>
                </section>

                <section className="go-browse" onClick={() => navigate(-1)}><PiBackspaceDuotone className="icon" />BACK</section>
            </article>
        </>
    );
};

export default LogSuggest;