import React from "react";
import "@scss/components/_header.scss";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='container'>
                <div className='logo-container' onClick={() => navigate("/")}>
                    <span>AMS</span>
                    <span> cashback</span>
                </div>

                <nav>
                    <section className="naviMenu">
                        <div>서비스신청</div>
                        <div>사용방법</div>
                        <div onClick={() => navigate("/notice")}>문의하기</div>
                    </section>
                    <section className="join-login">
                        <div className='join-btn'>회원가입</div>
                        <button type='button' className='login-btn'>
                            로그인
                        </button>
                    </section>
                </nav>

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
