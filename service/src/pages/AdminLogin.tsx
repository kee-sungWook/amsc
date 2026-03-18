import "@scss/pages/_adminLogin.scss";
import { useUserStore } from "@store/publicState";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
    const { loggedIn, user, setLoggedIn, setUser } = useUserStore();
    const navigate = useNavigate();
    const [idpw, setIdpw] = React.useState<Record<string, string>>({ id: '', pw: '' });
    const ref = React.useRef<Record<string, HTMLInputElement | null>>({ idRef: null, pwRef: null });

    React.useEffect(() => {
        ref.current.idRef && ref.current.idRef.focus();
    }, []);

    React.useEffect(() => {
        if (loggedIn && user?.type === 'a') navigate("home");
    }, [loggedIn, user]);

    const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    }

    async function handleLogin() {
        if (idpw.id.trim() === '') {
            alert('ID 입력란을 입력해 주세요');
            ref.current.idRef && ref.current.idRef.focus();
            return;
        }
        if (idpw.pw.trim() === '') {
            alert('PW 입력란을 입력해 주세요');
            ref.current.pwRef && ref.current.pwRef.focus();
            return;
        }
        try {
            const response = await fetch("/api/member/memberLogin", {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ memId: idpw.id, memPw: idpw.pw }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            setLoggedIn(true);
            setUser(result.message);
        } catch (err) {
            if (err === 'no member') alert('아이디 및 비밀번호를 확인하세요')
            console.error(`handleLogin err ${err}`);
        }
    }

    return (
        <article className="admin-login">
            <form>
                <h3><span>AMS</span> Admin</h3>
                <input
                    type="text"
                    ref={(el) => { ref.current.idRef = el }}
                    value={idpw.id}
                    placeholder="ID"
                    onChange={(e) => setIdpw((prev) => ({ ...prev, id: e.target.value }))}
                />
                <input
                    type="text"
                    ref={(el) => { ref.current.pwRef = el }}
                    value={idpw.pw}
                    placeholder="PW"
                    onChange={(e) => setIdpw((prev) => ({ ...prev, pw: e.target.value }))}
                    onKeyDown={(e) => activeEnter(e)}
                />
                <button type="button" onClick={handleLogin}>LOGIN</button>
            </form>
        </article>
    );
}

export default AdminLogin;
