import Header from "@components/Header";
import "@scss/pages/_mypage.scss";
import { PiMagnifyingGlassBold, PiAddressBookDuotone, PiLockKeyDuotone, PiEnvelopeDuotone, PiPhoneDuotone, PiBookmarksSimpleDuotone } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { LuCopyPlus } from "react-icons/lu";
import React from "react";
import { useUserStore } from "@store/publicState";
import { useNavigate } from "react-router-dom";
import type { OrderWithWorker } from "@interface/models";
import LoadingIndicator from "@components/LoadingIndicator";


const MyPage: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { user, setUser } = useUserStore();
    const [joinNetwork, setJoinNetwork] = React.useState<string>('');
    const [myOrder, setMyOrder] = React.useState<OrderWithWorker[]>([]); // 진행중인 주문 수
    const [userInfo, setUserInfo] = React.useState<Record<string, string>>({ name: user?.name || '', phone: user?.phone || '', email: user?.email || '' });
    const ref = React.useRef<Record<string, HTMLInputElement | null>>({ nameRef: null, phoneRef: null, emailRef: null });
    const [modifyMode, setModifyMode] = React.useState<boolean>(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchMyOrders = async () => {
            setLoading(true);
            const myorder = await fetch(`/api/order/getOrderForC/${user?.seq}`);
            const myorderJson = await myorder.json();
            if (myorderJson.success) {
                setMyOrder(myorderJson.message);
            } else {
                alert(`진행중인 주문 수를 불러오는데 실패했습니다: ${myorderJson.message}`);
            }
            setLoading(false);
        };
        const siteUrl = import.meta.env.VITE_SITE_URL;
        const page = `joinNetwork/${user?.id || '-'}`;
        const copyUrl = `${siteUrl}/${page}`;
        setJoinNetwork(copyUrl);
        fetchMyOrders();
    }, [user]);


    async function handleCopy() {
        if (!joinNetwork) return;

        // 최신 브라우저 (HTTPS 환경)
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(joinNetwork);
                alert("주소를 복사 했습니다.");
                return;
            } catch (e) {
                // 실패 시 fallback 진행
            }
        }

        // iOS Safari 및 구형 모바일 브라우저 fallback
        try {
            const textarea = document.createElement("textarea");
            textarea.value = joinNetwork;

            // iOS 대응
            textarea.style.position = "fixed";
            textarea.style.top = "0";
            textarea.style.left = "0";
            textarea.style.opacity = "0";

            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();

            const successful = document.execCommand("copy");
            document.body.removeChild(textarea);

            if (successful) {
                alert("주소를 복사 했습니다.");
            } else {
                alert("복사에 실패했습니다.");
            }
        } catch (err) {
            alert("복사 기능을 지원하지 않는 환경입니다.");
        }
    }

    async function handleModifyUserInfo() {
        setLoading(true);
        try {
            const sendData = {
                seq: user?.seq,
                updateData: userInfo
            };

            const response = await fetch('/api/user/updateField', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sendData),
            });

            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            setUser(result.message);
            setUserInfo({ ...userInfo });
        } catch (e) {
            alert(`회원정보 수정 중 오류가 발생했습니다. : ${e}`);
            console.error(e);
            setUserInfo({ name: user?.name || '', phone: user?.phone || '', email: user?.email || '' })
        } finally {
            setModifyMode(false);
            setLoading(false);
        }
    }

    return (
        <>
            <Header />
            <article className='mainContainer my-page'>
                <section className="top">
                    <img src='/img/titlePic_mypage.png' alt='rent Illustration' />
                    <div className="top-txt">
                        <div className='title'>
                            <span>My</span> Page
                        </div>
                        <div className='content'>
                            회원님의 개인정보와 주문 진행 상태를<br />손쉽게 확인할 수 있습니다.
                        </div>
                        {/* <div className='content2'>
                            여유로운 드라이브, 가벼운 여행, 특별한 날까지.
                            <br />
                            지금 당신에게 딱 맞는 차를, 손쉽게 만나보세요.
                        </div> */}
                    </div>
                </section>

                {loading
                    ? <LoadingIndicator size={120} />
                    : <>
                        <div className="head-group">
                            <section className="rectForm order-area">
                                <figure>
                                    <img src="/img/mypageCon_order.png" />
                                    <figcaption>ORDER</figcaption>
                                </figure>
                                <div className="row">
                                    <div>진행중인 주문<span>{myOrder.filter((list) => list.situation !== 'finish').length}</span></div>
                                    <div>최근 처리완료<span>{myOrder.filter((list) => list.situation === 'finish').length}</span></div>
                                </div>
                                <button onClick={() => navigate("/myOrder")}><PiMagnifyingGlassBold className="icon" />상세보기</button>
                            </section>

                            <section className="rectForm point-area">
                                <figure>
                                    <img src="/img/mypageCon_point.png" />
                                    <figcaption>POINT</figcaption>
                                </figure>
                                <div className="point-num">{user?.point ?? ''} <span>pt.</span></div>
                            </section>
                        </div>

                        <section className="rectForm user-area">
                            <section className="head-line">
                                <div className="edit-area">&nbsp;</div>
                                USER INFORMATION
                                <div className="edit-area" onClick={() => setModifyMode(true)}>
                                    {!modifyMode &&
                                        <><FiEdit className="icon" />수정하기</>
                                    }
                                </div>
                            </section>
                            <div className="info"><PiAddressBookDuotone className="icon" />
                                <span>ID :</span>{user?.id}
                            </div>
                            <div className="info"><PiLockKeyDuotone className="icon" />
                                <span>Pass :</span>***
                            </div>
                            {/* <div className="info"><PiBarcodeDuotone className="icon" />
                                <span>Type :</span>{user?.type}
                            </div> */}
                            <div className="info"><PiBookmarksSimpleDuotone className="icon" />
                                <span>이름 :</span>
                                {
                                    modifyMode
                                        ? <input
                                            type='text'
                                            value={userInfo['name']}
                                            ref={(el) => { ref.current.nameRef = el }}
                                            name='name'
                                            onChange={(e) => setUserInfo({ ...userInfo, ['name']: e.target.value })}
                                        />
                                        : (user?.name || '')
                                }
                            </div>
                            <div className="info"><PiPhoneDuotone className="icon" />
                                <span>연락처 :</span>
                                {
                                    modifyMode
                                        ? <input
                                            type='text'
                                            value={userInfo['phone']}
                                            ref={(el) => { ref.current.phoneRef = el }}
                                            name='phone'
                                            onChange={(e) => setUserInfo({ ...userInfo, ['phone']: e.target.value })}
                                        />
                                        : (user?.phone || '')
                                }
                            </div>
                            <div className="info"><PiEnvelopeDuotone className="icon" />
                                <span>이메일 :</span>
                                {
                                    modifyMode
                                        ? <input
                                            type='text'
                                            value={userInfo['email']}
                                            ref={(el) => { ref.current.emailRef = el }}
                                            name='email'
                                            onChange={(e) => setUserInfo({ ...userInfo, ['email']: e.target.value })}
                                        />
                                        : (user?.email || '')
                                }
                            </div>
                            {modifyMode &&
                                <div className="btn-area">
                                    <button type="button" onClick={handleModifyUserInfo}>수정</button>
                                    <button type="button" className="cancel" onClick={() => setModifyMode(false)}>취소</button>
                                </div>
                            }
                        </section>

                        {user?.type !== 'c' &&
                            <section className="rectForm link-area">
                                <img src="/img/mypageCon_networking.png" />
                                <div className="url-description">
                                    <p>{joinNetwork}</p>
                                    <span>직속 영업자 회원가입용 주소를 복사하여 상대방에게 전송합니다.</span>
                                </div>
                                <div className="copy-area"><LuCopyPlus className="icon" onClick={handleCopy} />주소복사</div>
                            </section>
                        }
                    </>
                }
            </article>
        </>
    );
}

export default MyPage;
