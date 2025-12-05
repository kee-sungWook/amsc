import React from "react";
import "@scss/components/_header.scss";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@store/publicState";

const Header: React.FC = () => {
    const { loggedIn, user, setUserClear } = useUserStore();

    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='container'>
                <section className='logo-container' onClick={() => navigate("/main")}>
                    <span>AMS</span>
                </section>

                <nav className="naviMenu">
                    <div onClick={() => navigate("/service")}>서비스신청</div>
                    <div>사용방법</div>
                    <div onClick={() => navigate("/notice")}>문의하기</div>
                </nav>

                <section className="join-login">
                    {loggedIn
                        ? <>
                            <div className="login-after">
                                <span>{user!.name}</span> 로그인중.
                                <button type="button" onClick={setUserClear}>LOGOUT</button>
                            </div>
                        </>
                        : <>
                            <div className='join-btn' onClick={() => navigate("/join")}>회원가입</div>
                            <button type='button' onClick={() => navigate("/login")}>
                                로그인
                            </button>
                        </>
                    }

                </section>

                <button type='button' className='mobile-menu-button'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;
