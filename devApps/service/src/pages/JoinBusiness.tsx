import "@scss/pages/_join.scss";
import React, { useEffect, useRef, useState } from "react";
import { useUserStore } from "@store/publicState";
import { useNavigate } from "react-router-dom";

const JoinBusiness = () => {
    const { setLoggedIn, setUser } = useUserStore();
    const navigate = useNavigate();
    const { loggedIn } = useUserStore();
    const [sidoCode, setSidoCode] = React.useState<{ code: string, name: string }[]>([]);
    const [sigunguCode, setSigunguCode] = React.useState<{ code: string, name: string }[]>([]);
    const [userData, setUserData] = useState({
        userId: "",
        userPw: "",
        userIndustry: "",
        userPhone1: "010",
        userPhone2: "",
        userPhone3: "",
        userName: "",
        userEmailHead: "",
        userEmailTail: "",
        userSido: "0",
        userSigungu: "0"
    });
    const refs = useRef<Record<string, HTMLInputElement | HTMLSelectElement | null>>({
        id: null,
        pw: null,
        industry: null,
        phone2: null,
        phone3: null,
        name: null,
        sido: null,
        sigungu: null,
    });

    useEffect(() => {
        if (loggedIn) navigate("/main");
        refs.current.id!.focus();
    }, [loggedIn]);

    useEffect(() => {
        getSido();
    }, []);

    async function getSido() {
        const res = await fetch("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000");
        const result = await res.json();
        setSidoCode(result.regcodes);
    }

    async function getSigungu(e: React.ChangeEvent<HTMLSelectElement>) {
        if (e.target.value === '0') {
            setSigunguCode([]);
            setUserData({ ...userData, userSido: '0', userSigungu: '0' });
            return;
        }
        const cd = e.target.value.substring(0, 2);
        const res = await fetch(`https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${cd}*00000`);
        const result = await res.json();
        const sigunguData = result.regcodes.splice(1);
        const sigungus = sigunguData.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));
        setSigunguCode(sigungus);
    }

    function handleChange(e: EventTarget & HTMLInputElement | HTMLSelectElement) {
        const newData = { ...userData, [e.name]: e.value };
        setUserData(newData);
    }

    function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
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

            if (el.name === 'userSido' && el.value === '0') {
                el.style.border = "1px solid #dd3aa3";
                validate = false;
            }

            if (el.name === 'userSigungu' && el.value === '0') {
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
                userIndustry: userData.userIndustry,
                userId: userData.userId.trim(),
                userPw: userData.userPw.trim(),
                userName: userData.userName.trim(),
                userEmail: userEmail.trim(),
                userPhone: userPhone.trim(),
                userSido: userData.userSido.substring(0, 2),
                userSigungu: userData.userSigungu.substring(2, 5),
            }

            const headers = { "Content-Type": "application/json" };
            const res = await fetch("/api/user/joinBusiness", {
                method: "post",
                headers: headers,
                body: JSON.stringify(sendData),
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message);
            setLoggedIn(true);
            setUser(result.message);
            navigate("/main");
        } catch (error) {
            console.error(`[Join handleJoin Err] - ${error}`);
            if (error === 'id') alert('이미 사용중인 아이디 입니다');
        }
    }

    return (
        <article className="join join-network">
            <section className="network-title">
                <div className='ams'>AMS</div>
                <div>회원가입<p>Business Operator join</p></div>
            </section>
            <form className="pannel" onSubmit={handleJoin}>
                <div>업종선택<span>(필수입력)</span></div>
                <select value={userData.userIndustry} ref={(el) => { refs.current.industry = el }} name="userIndustry" data-define={"업종"}
                    onChange={(e) => handleChange(e.target)}
                    onFocus={handleFocus}
                >
                    <option value="">업종을 선택해주세요</option>
                    <option value="FX">정비</option>
                    <option value="RT">렌트</option>
                    <option value="DE">탁송</option>
                </select>
                <br />
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
                <br />
                <div>담당지역 선택<span>(필수입력)</span></div>
                <div className="two-p">
                    <select value={userData.userSido} ref={(el) => { refs.current.sido = el }} name="userSido" data-define={"시.도"}
                        onChange={async (e) => { handleChange(e.target); await getSigungu(e); }}
                        onFocus={handleFocus}
                    >
                        <option value="0">시.도 선택</option>
                        {sidoCode.map((sido) => (
                            <option key={sido.code} value={sido.code}>{sido.name}</option>
                        ))}
                    </select>
                    <select value={userData.userSigungu} ref={(el) => { refs.current.sigungu = el }} name="userSigungu" data-define={"시.군.구"}
                        onChange={(e) => handleChange(e.target)}
                        onFocus={handleFocus}
                    >
                        <option value="0">시.군.구 선택</option>
                        {sigunguCode.map((sigungu) => (
                            <option key={sigungu.code} value={sigungu.code}>{sigungu.name.split(" ")[1]} {sigungu.name.split(" ")[2] && sigungu.name.split(" ")[2]}</option>
                        ))}
                    </select>
                </div>
                <button>회원가입</button>
            </form>
            <div className="placeholder">&nbsp;</div>
        </article>
    );
}

export default JoinBusiness;
