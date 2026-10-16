import "@scss/pages/_rentalCar.scss";
import Header from "@components/Header";
import { FaStarOfLife } from "react-icons/fa6";
import { PiUserDuotone, PiPhoneDuotone } from "react-icons/pi";
import React from "react";
import Postcode from "@components/PostCode";
import type { AddrData, DummyUser, SidogunguVal } from "@interface/models";
import { format, addDays } from "date-fns";
import CalendarPicker from "@components/CalendarPicker";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@store/publicState";
import { makeOrderNum } from "@utils/supporters";
import LoadingIndicator from "@components/LoadingIndicator";

const RentalCar: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { user } = useUserStore();
    const [popup, setPopup] = React.useState<boolean>(false);
    const [dummyUserData, setDummyUserData] = React.useState<DummyUser>({ name: "", phone: "" });
    const [sidogunguVal, setSidogunguVal] = React.useState<SidogunguVal>({ sido: '0', sigungu: '0' });
    const [car, setCar] = React.useState<string>('');
    const [address, setAddress] = React.useState<string>('');
    const [addressSub, setAddressSub] = React.useState<string>('');
    const [startDate, setStartDate] = React.useState<Date>(new Date());
    const [endDate, setEndDate] = React.useState<Date>(addDays(new Date(), 3));
    const [calendarMode, setCalendarMode] = React.useState<'start' | 'end' | ''>('');
    const refs = React.useRef<Record<string, HTMLInputElement | null>>({ userName: null, userPhone: null, carType: null, day: null, joso: null });
    const navigate = useNavigate();

    function handleBtnFindAddr() {
        setPopup(!popup);
    }

    function handleAddr(addrData: AddrData) {
        const addr = addrData.addr ?? '';
        const addrSub = addrData.sub || '';
        const sidoCode = addrData.bCode ? addrData.bCode.substring(0, 2) : '';
        const sigunguCode = addrData.bCode ? addrData.bCode.substring(2, 5) : '';
        setAddress(addr);
        setAddressSub(addrSub);
        setSidogunguVal({ sido: sidoCode, sigungu: sigunguCode });
    }

    function validateCheck(): boolean {
        if (dummyUserData.name === undefined || dummyUserData.name.trim() === '') {
            alert('신청자 이름을 입력해 주세요');
            refs.current.userName?.focus();
            return false;
        }
        if (dummyUserData.phone === undefined || dummyUserData.phone.trim() === '') {
            alert('연락처를 입력해 주세요');
            refs.current.userPhone?.focus();
            return false;
        }
        if (car.trim() === '') {
            alert('희망차종을 입력해 주세요');
            refs.current.carType?.focus();
            return false;
        }
        if (startDate > endDate) {
            alert('렌트종료일을 시작일 이후 날짜로 설정해 주세요');
            refs.current.day?.focus();
            return false;
        }
        if (address.trim() === '') {
            alert('배차주소를 입력해 주세요');
            refs.current.juso?.focus();
            return false;
        }
        return true;
    }

    async function handleSubmit(event: React.FormEvent) {
        event?.preventDefault();
        if (!validateCheck()) return;
        try {
            setLoading(true);
            const detail = {
                희망차종: car,
                렌트기간: `${format(startDate, "yyyy-MM-dd")} ~ ${format(endDate, "yyyy-MM-dd")}`,
                배차주소: address,
                나머지주소: addressSub,
            };
            const sendData = {
                requester: user?.seq || 0,
                userName: dummyUserData.name,
                userPhone: dummyUserData.phone,
                industry: 'RT',
                service: 'RTS',
                title: `렌트신청: ${car} 희망 - ${address.split(' ')[0]} ${address.split(' ')[1]}`,
                num: `RTA-${makeOrderNum()}`,
                detail: JSON.stringify(detail),
                sido: sidogunguVal.sido,
                sigungu: sidogunguVal.sigungu,
            };
            const res = await fetch('/api/order/insertOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([sendData]),
            });
            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            const hasFail = json.message.some((r: any) => r.success === false);
            if (hasFail) {
                const errors = json.message
                    .filter((r: any) => !r.success)
                    .map((r: any) => `[${r.index}] ${r.error ?? 'unknown error'}`)
                    .join('\n');
                throw new Error(errors);
            }
            console.log(`result: ${JSON.stringify(json.message)}`);
            navigate("/myOrder");
        } catch (error) {
            alert(`신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요. \n${error}`);
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Header />
            {calendarMode &&
                <CalendarPicker
                    calendarMode={calendarMode}
                    setCalendarMode={setCalendarMode}
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                />
            }
            <article className="mainContainer rental-car">
                <section className="top">
                    <img src='/img/titlePic_rent.jpg' alt='rent Illustration' />
                    <div className="top-txt">
                        <div className='title'>
                            <span>Car</span> RENTAL
                        </div>
                        <div className='content'>
                            차가 바뀌면, 하루도 달라집니다
                        </div>
                        <div className='content2'>
                            여유로운 드라이브, 가벼운 여행, 특별한 날까지.
                            <br />
                            지금 당신에게 딱 맞는 차를, 손쉽게 만나보세요.
                        </div>
                    </div>
                </section>

                {loading
                    ? <LoadingIndicator size={150} />
                    : <section className="user-form">
                        <div className="user">
                            <div className="user-row">
                                <PiUserDuotone className="icon" />
                                <span>운전자 : </span>
                                <input
                                    type="text"
                                    value={dummyUserData.name}
                                    ref={(el) => { refs.current.userName = el }}
                                    placeholder="운전자 이름"
                                    onChange={(e) => setDummyUserData((prev) => ({ ...prev, name: e.target.value }))}
                                />
                            </div>
                            <div className="user-row">
                                <PiPhoneDuotone className="icon" />
                                <span>연락처 :</span>
                                <input
                                    type="text"
                                    value={dummyUserData.phone}
                                    placeholder="연락처"
                                    ref={(el) => { refs.current.userPhone = el }}
                                    onChange={(e) => setDummyUserData((prev) => ({ ...prev, phone: e.target.value }))}
                                />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <p><FaStarOfLife className="icon" />희망차종</p>
                                <input type="text" value={car} ref={(el) => { refs.current.carType = el }} onChange={(e) => setCar(e.target.value)} />
                            </div>

                            <div className="form-row">
                                <p><FaStarOfLife className="icon" />렌트기간</p>
                                <div className="group">
                                    <input
                                        type="text"
                                        value={format(startDate, "yyyy-MM-dd")}
                                        readOnly
                                        onClick={() => {
                                            setCalendarMode('start');
                                        }}
                                    />
                                    <span>~</span>
                                    <input
                                        type="text"
                                        value={format(endDate, "yyyy-MM-dd")}
                                        readOnly
                                        ref={(el) => { refs.current.day = el }}
                                        onClick={() => {
                                            setCalendarMode('end');
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <p><FaStarOfLife className="icon" />배차주소</p>
                                <div className="group">
                                    <input type="text" name="addr" value={address} ref={(el) => { refs.current.juso = el }} readOnly onClick={handleBtnFindAddr} />
                                    <button type="button" className="addr" onClick={handleBtnFindAddr}>주소검색</button>
                                </div>
                                <div className="group">
                                    <input type="text" name="sub" placeholder="나머지 주소" value={addressSub} onChange={(e) => setAddressSub(e.target.value)} />
                                </div>
                            </div>
                            <section className="btnArea">
                                <button>신청하기</button>
                                <button type="button" className="cancel" onClick={() => navigate("/main")}>취소</button>
                            </section>
                        </form>
                    </section>
                }

            </article>
            {popup && <Postcode handleComplete={handleBtnFindAddr} handleAddr={handleAddr} />}
        </>
    );
};

export default RentalCar;