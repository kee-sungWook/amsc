import "@scss/pages/_join.scss";
import Header from "@components/Header";
import React, { useEffect, useRef, useState } from "react";
import { useUserStore } from "@store/publicState";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const { setLoggedIn, setUser } = useUserStore();
    const navigate = useNavigate();
    const { loggedIn } = useUserStore();
    const [userData, setUserData] = useState({
        userId: "",
        userPw: "",
        userPhone1: "010",
        userPhone2: "",
        userPhone3: "",
        userName: "",
        userEmailHead: "",
        userEmailTail: "",
    });
    const refs = useRef<Record<string, HTMLInputElement | null>>({
        id: null,
        pw: null,
        phone2: null,
        phone3: null,
        name: null,
    });

    useEffect(() => {
        if (loggedIn) navigate("/main");
        refs.current.id!.focus();
    }, [loggedIn, navigate]);

    function handleChange(e: EventTarget & HTMLInputElement) {
        const newData = { ...userData, [e.name]: e.value };
        setUserData(newData);
    }

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
        e.target.style.border = "1px solid #dce2ea";
    }

    async function handleJoin(e: React.FormEvent) {
        e.preventDefault();
        let validate: boolean = true;
        Object.entries(refs.current).forEach(([_, el]) => {
            if (!el) return;

            if (el.name === 'userPhone2' && el.value.length < 3) {
                el.style.border = "1px solid #dd3aa3";
                validate = false;
            }

            if (el.name === 'userPhone3' && el.value.length < 4) {
                el.style.border = "1px solid #dd3aa3";
                validate = false;
            }

            if (el.name === "userName" && el.value.length < 2) {
                el.style.border = "1px solid #dd3aa3";
                validate = false;
            }

            if (!el.value) {
                el.style.border = "1px solid #dd3aa3";
                validate = false;
            }
        });

        if (!validate) return;

        try {
            const checkValid = await fetch(`/api/user/checkValid/${userData.userId.trim()}`);
            const checkValidResult = await checkValid.json();
            if (checkValidResult.success) throw new Error(checkValidResult.message);

            const userPhone = `${userData.userPhone1}-${userData.userPhone2}-${userData.userPhone3}`;
            const userEmail = `${userData.userEmailHead}@${userData.userEmailTail}`;
            const sendData = {
                type: 'c',
                id: userData.userId.trim(),
                passW: userData.userPw.trim(),
                name: userData.userName.trim(),
                email: userEmail.trim(),
                phone: userPhone.trim(),
            }

            const headers = { "Content-Type": "application/json" };
            const res = await fetch("/api/user/join", {
                method: "post",
                headers: headers,
                body: JSON.stringify(sendData),
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message);
            setLoggedIn(true);
            setUser(result.message);
            navigate("/main");
        } catch (error: any) {
            console.error(`[Join handleJoin Err] - ${error.message}`);
            if (error === 'id') alert('이미 사용중인 아이디 입니다');
        }
    }

    return (
        <>
            <Header />
            <article className="join">
                <section className="title">회원가입.</section>
                <form className="pannel" onSubmit={handleJoin}>
                    <div>아이디 입력<span>(필수입력)</span></div>
                    <input type="text" value={userData.userId} ref={(el) => { refs.current.id = el }} name="userId" data-define={"아이디"}
                        onChange={(e) => handleChange(e.target)}
                        onFocus={handleFocus}
                    />
                    <br />
                    <div>패스워드 입력<span>(필수입력)</span></div>
                    <input type="password" value={userData.userPw} ref={(el) => { refs.current.pw = el }} name="userPw" data-define={"패스워드"}
                        onChange={(e) => handleChange(e.target)}
                        onFocus={handleFocus}
                    />
                    <br />
                    <div>연락처<span>(필수입력)</span></div>
                    <div className="three-p">
                        <input type="text" defaultValue={userData.userPhone1} />-
                        <input type="number" value={userData.userPhone2} ref={(el) => { refs.current.phone2 = el }} name="userPhone2" data-define={"연락처 앞자리"}
                            onChange={(e) => handleChange(e.target)} maxLength={4}
                            onFocus={handleFocus} />-
                        <input type="number" value={userData.userPhone3} ref={(el) => { refs.current.phone3 = el }} name="userPhone3" data-define={"연락처 뒷자리"}
                            onChange={(e) => handleChange(e.target)} maxLength={4}
                            onFocus={handleFocus} />
                    </div>
                    <br />
                    <div>이름<span>(필수입력)</span></div>
                    <input type="text" value={userData.userName} ref={(el) => { refs.current.name = el }} name="userName" data-define={"이름"}
                        onChange={(e) => handleChange(e.target)}
                        onFocus={handleFocus}
                    />
                    <br />
                    <div>이메일</div>
                    <div className="two-p">
                        <input type="text" value={userData.userEmailHead} name="userEmailHead" onChange={(e) => handleChange(e.target)} />@
                        <input type="text" value={userData.userEmailTail} name="userEmailTail" onChange={(e) => handleChange(e.target)} />
                    </div>
                    <button>회원가입</button>
                </form>
            </article>
        </>
    );
}

export default Join;