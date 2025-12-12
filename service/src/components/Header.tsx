import React, { useEffect } from "react";
import "@scss/components/_header.scss";
import { PiChatCircleDots, PiFileText, PiGearSixFill, PiPowerBold } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@store/publicState";
import { motion } from "motion/react";
import useMeasure from "react-use-measure";

const Header: React.FC = () => {
    const { loggedIn, user, setUserClear } = useUserStore();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
    const insideRef = React.useRef<HTMLDivElement>(null);
    const [ref] = useMeasure();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (insideRef.current && !insideRef.current.contains(e.target as Node)) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("mousedown", handleClickOutSide);
        return () => {
            window.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

    return (
        <div className='header'>
            <div className='container'>
                <section className='logo-container' onClick={() => navigate("/main")}>
                    <span>AMS</span>
                </section>

                <nav className="naviMenu">
                    <div onClick={() => navigate("/notice")}>문의하기</div>
                    <div onClick={() => navigate("/faq")}>FAQ</div>
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

                <div ref={insideRef}>
                    <button
                        type='button'
                        className='mobile-menu-button'
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>

                    <motion.div
                        initial={false}
                        animate={mobileMenuOpen
                            ? { display: "flex", height: "auto", opacity: 1 }
                            : { display: "none", height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.2 }}
                        className='mobile-menu-drawer'
                    >
                        <nav ref={ref} className='mobile-naviMenu'>
                            <div onClick={() => navigate("/main")}><AiOutlineHome className="icon" />HOME</div>
                            <div onClick={() => navigate("/login")}><PiPowerBold className="icon" />로그인</div>
                            <div onClick={() => navigate("/join")}><FiUserPlus className="icon" />회원가입</div>
                            <div onClick={() => navigate("/notice")}><PiChatCircleDots className="icon" />문의하기</div>
                            <div onClick={() => navigate("/faq")}><PiFileText className="icon" />FAQ</div>
                            <div onClick={() => navigate("/mypage")}><PiGearSixFill className="icon blue" />마이페이지</div>
                        </nav>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Header;
