import React, { useEffect } from "react";
import "@scss/components/_header.scss";
import { PiArticle, PiCarSimple, PiChatCircleDots, PiGearSixFill, PiPowerBold, PiUser } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@store/publicState";
import { motion } from "motion/react";
import useMeasure from "react-use-measure";
// import { isPwaInstalled } from "../pwaInstall";

// import { TbDeviceDesktopPlus } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";

const Header: React.FC = () => {
    const { loggedIn, user, setUserClear } = useUserStore();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
    const insideRef = React.useRef<HTMLDivElement>(null);
    const [ref] = useMeasure();
    // const [_, setPwaInstalled] = React.useState(false);

    // useEffect(() => {
    //     setPwaInstalled(isPwaInstalled());

    //     const handler = () => setPwaInstalled(true);
    //     window.addEventListener("appinstalled", handler);

    //     return () => window.removeEventListener("appinstalled", handler);
    // }, []);

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

    function logout() {
        setUserClear();
        sessionStorage.clear();
        window.location.replace("/main");
    }

    // const handlePWAInstall = async () => {
    //     const installed = await triggerPwaInstall();
    //     if (installed) {
    //         setPwaInstalled(true);
    //         alert("설치 완료");
    //     }
    // };

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <section className='logo-container'>
                        <span onClick={() => navigate("/main")}>AMS</span>
                        {/* {!pwaInstalled && (
                            <div className="mobile-favorite" onClick={handlePWAInstall}>
                                <TbDeviceDesktopPlus className="icon" /> 바로가기
                            </div>
                        )} */}
                    </section>

                    <nav className="naviMenu">
                        {/* <div onClick={() => navigate("/faq")}>FAQ</div> */}
                        {loggedIn &&
                            <>
                                <div onClick={() => navigate("/mypage")}>마이페이지</div>
                                <div onClick={() => navigate("/service")}>서비스신청</div>
                                <div onClick={() => navigate("/notice")}>1:1 문의</div>
                                <div onClick={() => navigate("/myOrder")}>주문현황</div>
                            </>
                        }
                    </nav>

                    <section className="join-login">
                        {loggedIn
                            ? <>
                                <div className="login-after">
                                    <PiUser className="icon" />
                                    <span>{user!.name}</span> 로그인중.
                                    <button type="button" onClick={logout}>LOGOUT</button>
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
                                {!loggedIn &&
                                    <>
                                        <div onClick={() => navigate("/login")}><PiPowerBold className="icon" />로그인</div>
                                        <div onClick={() => navigate("/join")}><FiUserPlus className="icon" />회원가입</div>
                                    </>
                                }
                                {loggedIn &&
                                    <>
                                        <div onClick={() => navigate("/mypage")}><PiGearSixFill className="icon blue" />마이페이지</div>
                                        <div onClick={() => navigate("/service")}><PiCarSimple className="icon" />서비스신청</div>
                                        <div onClick={() => navigate("/notice")}><PiChatCircleDots className="icon" />1:1 문의</div>
                                        <div onClick={() => navigate("/myOrder")}><PiArticle className="icon" />주문현황</div>
                                        <div onClick={() => {
                                            setMobileMenuOpen(false);
                                            logout();
                                        }}><MdLogout className="icon red" />로그아웃</div>
                                    </>
                                }
                            </nav>
                        </motion.div>
                    </div>
                </div>
                {loggedIn &&
                    <div className="log-info-header">
                        <section className="log-info">
                            <PiUser className="icon" />
                            <span>{user!.name}</span>로그인중.
                            <button type="button" onClick={() => navigate("/mypage")}><PiGearSixFill className="icon" /></button>
                        </section>
                    </div>
                }
            </div>

        </>
    );
};

export default Header;
