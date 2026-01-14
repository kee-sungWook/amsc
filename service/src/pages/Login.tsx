import Header from "@components/Header";
import type { User } from "@interface/models";
import "@scss/pages/_login.scss";
import { useUserStore } from "@store/publicState";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [userId, setUserid] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");
    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);
    const { loggedIn, setLoggedIn, setUser } = useUserStore();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPath = location.state?.from || "/main";

    useEffect(() => {
        if (loggedIn) navigate(fromPath, { replace: true });
        idRef.current?.focus();
    }, [loggedIn]);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        if (userId.trim() === '') {
            alert("아이디를 입력해 주세요");
            idRef.current!.focus();
            return;
        }
        if (userPw.trim() === '') {
            alert("비밀번호를 입력해 주세요");
            pwRef.current!.focus();
            return;
        }
        try {
            const response = await fetch("/api/user/signIn", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: userId, userPw: userPw }),
            })
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            const userData: User = result.message;
            setLoggedIn(true);
            setUser(userData);
            navigate(fromPath, { replace: true });
        } catch (error) {
            console.error(`[handleLogin err] ${error}`);
            alert("아이디 또는 패스워드가 맞지 않습니다");
        }
    }

    return (
        <>
            <Header />
            <article className="login">
                <section className="title">LOGIN.</section>
                <form className="pannel" onSubmit={handleLogin}>
                    <span>아이디 입력</span>
                    <input type="text" value={userId} ref={idRef} onChange={(e) => setUserid(e.target.value)} />
                    <br />
                    <span>패스워드 입력</span>
                    <input type="password" value={userPw} ref={pwRef} onChange={(e) => setUserPw(e.target.value)} />
                    <button>로그인</button>
                </form>
                <section className="sign-up">
                    아직 계정이 없으신가요?
                    <button type="button" onClick={() => navigate("/join")}>회원가입</button>
                </section>
            </article>
        </>
    );
}

export default Login;