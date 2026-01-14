import "@scss/pages/_serviceApply.scss";
import Header from "@components/Header";
import { useServiceChoose } from "@store/serviceChoose";
import { SERVICE_LIST, type AllowServiceVal } from "@interface/others";
import React, { Fragment } from "react";
import { PiPhoneDuotone, PiUserDuotone, PiAddressBookTabsDuotone } from "react-icons/pi";
import { IoBuild, IoCarSport, IoLocationSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa6";
import Postcode from "../components/PostCode";
import LoadingIndicator from "@components/LoadingIndicator";
import type { AddrData, De, DummyUser, Fxrt, SidogunguVal } from "@interface/models";
import { useUserStore } from "@store/publicState";
import { useNavigate } from "react-router-dom";
import { makeOrderNum } from "@utils/supporters";



const ServiceApply = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { user } = useUserStore();
    const navigate = useNavigate();
    const [dummyUserData, setDummyUserData] = React.useState<DummyUser>({ name: user?.name, phone: user?.phone });
    const { applyList, setApplyList } = useServiceChoose();
    const serviceList: AllowServiceVal[] = [...SERVICE_LIST];

    const [fxrt, setFxrt] = React.useState<Fxrt>({ 차종: '', 차량번호: '', 보험접수번호: '', 과실비율: '' });
    const [fxRtSidogunguVal, setFxRtSidogunguVal] = React.useState<SidogunguVal>({ sido: '0', sigungu: '0' });
    const [de, setDe] = React.useState<De>({ 차량번호: '', 예약시간: '', 출발지연락처: '', 출발지주소: '', 도착지연락처: '', 도착지주소: '', 결재방식: '' });
    const [deSidogunguVal, setDeSidogunguVal] = React.useState<SidogunguVal>({ sido: '0', sigungu: '0' });
    const [phoneS1, setPhoneS1] = React.useState<string>('010');
    const [phoneS2, setPhoneS2] = React.useState<string>('');
    const [phoneS3, setPhoneS3] = React.useState<string>('');
    const [phoneE1, setPhoneE1] = React.useState<string>('010');
    const [phoneE2, setPhoneE2] = React.useState<string>('');
    const [phoneE3, setPhoneE3] = React.useState<string>('');
    const [popup, setPopup] = React.useState<boolean>(false);
    const [deAddrTarget, setDeAddrTarget] = React.useState<string>('');
    const [sidoCode, setSidoCode] = React.useState<{ code: string, name: string }[]>([]);
    const [sigunguCode, setSigunguCode] = React.useState<{ code: string, name: string }[]>([]);
    const userRefs = React.useRef<(HTMLInputElement | null)[]>([null, null]);
    const fxRefs = React.useRef<(HTMLInputElement | HTMLSelectElement | null)[]>([null, null, null, null, null, null]);
    const rtRefs = React.useRef<(HTMLInputElement | HTMLSelectElement | null)[]>([null, null, null, null, null, null]);
    const deRefs = React.useRef<Record<string, HTMLInputElement | null>>({ carNum: null, time: null, startJuso: null, endJuso: null, payType: null });
    const phoneRefs = React.useRef<(HTMLInputElement | null)[]>([null, null, null, null, null, null]);

    //정비전용 - 입고일자
    const [ibgoDay, setibgoDay] = React.useState<string>('');
    const ibgoRef = React.useRef<HTMLInputElement | null>(null);



    React.useEffect(() => {
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
            setFxRtSidogunguVal({ sido: '0', sigungu: '0' });
            return;
        }
        const cd = e.target.value.substring(0, 2);
        const res = await fetch(`https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${cd}*00000`);
        const result = await res.json();
        const sigunguData = result.regcodes.splice(1);
        const sigungus = sigunguData.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));
        setSigunguCode(sigungus);
    }

    function handleBtnFindAddr() {
        setPopup(!popup);
    }
    function handleAddr(addr: AddrData) {
        const address = addr.sub !== '' ? `${addr.addr} (${addr.sub})` : `${addr.addr}`;
        const desidoCode = addr.bCode ? addr.bCode.substring(0, 2) : '';
        const desigunguCode = addr.bCode ? addr.bCode.substring(2, 5) : '';
        if (deAddrTarget === 'start') {
            console.log(`deltarget start`);
            setDe((prev) => ({ ...prev, ['출발지주소']: address }));
            setDeSidogunguVal({ sido: desidoCode ?? '', sigungu: desigunguCode ?? '' })
        } else {
            console.log(`deltarget end`);
            setDe((prev) => ({ ...prev, ['도착지주소']: address }));
        }
    }

    function handleCheck(targetVal: AllowServiceVal) {
        let next = [...applyList];

        //토글
        next = next.includes(targetVal)
            ? next.filter((v) => v !== targetVal)
            : [...next, targetVal];

        //all 체크시 전체선택
        if (targetVal === "all" && next.includes("all")) {
            next = ["all", ...serviceList];
            return setApplyList(next);
        }

        //개별 서비스 해제 시 all 제거
        if (targetVal !== "all" && !next.includes(targetVal)) {
            next = next.filter((v) => v !== "all");
        }

        //모든 개별 서비스 선택시  all 자동 선택
        const allServicesChecked = serviceList.every((s) => next.includes(s));
        if (allServicesChecked && !next.includes("all")) {
            next.push("all");
        }
        setApplyList(next);
    }



    function makeLocName(define: string): string {
        if (define === 'start') {
            const names = de['출발지주소'].split(" ");
            return `출발-${names[0]} ${names[1]}`
        } else {
            {
                const names = de['도착지주소'].split(" ");
                return `도착-${names[0]} ${names[1]}`
            }
        }
    }

    function checkValidate(): Boolean {
        for (const el of userRefs.current) {
            if (!el) {
                console.error(`!el`);
                return false;
            }
            if (el.value.trim() === '') {
                alert(`${el.placeholder} 항목을 입력해 주세요`);
                el.focus();
                return false;
            }
        }

        if (applyList.includes("FX")) {
            if (ibgoDay === "") {
                alert(`수리신청 : 입고일자 항목을 입력해 주세요`);
                ibgoRef.current && ibgoRef.current.focus();
                return false;
            }
            for (const el of fxRefs.current) {
                if (!el) {
                    console.error(`!el`);
                    return false
                }
                if (el instanceof HTMLInputElement && el.value.trim() === '') {
                    alert(`수리신청 : ${el.placeholder} 항목을 입력해 주세요`);
                    el.focus();
                    return false;
                }
                if (el instanceof HTMLSelectElement && el.value === '0') {
                    alert(`수리신청 : 지역선택 항목을 입력해 주세요`);
                    el.focus();
                    return false;
                }
            }
        }

        if (applyList.includes("RT")) {
            for (const el of rtRefs.current) {
                if (!el) {
                    console.error(`!el`);
                    return false
                }
                if (el instanceof HTMLInputElement && el.value.trim() === '') {
                    alert(`대차신청 : ${el.placeholder} 항목을 입력해 주세요`);
                    el.focus();
                    return false;
                }
                if (el instanceof HTMLSelectElement && el.value === '0') {
                    alert(`대차신청 : 지역선택 항목을 입력해 주세요`);
                    el.focus();
                    return false;
                }
            }
        }

        if (applyList.includes("DE")) {
            for (const el of Object.values(deRefs.current)) {
                if (!el) {
                    console.error('!el');
                    return false;
                }
                if (el.value.trim() === '') {
                    alert(`탁송신청 : ${el.placeholder} 항목을 입력해 주세요`);
                    el.focus();
                    return false;
                }
            }

            for (const el of phoneRefs.current) {
                if (!el) {
                    console.log(`!el`);
                    return false;
                }
                if (el.value.trim() === '') {
                    alert(`탁송신청 : 연락처 항목을 입력해 주세요`);
                    el.focus();
                    return false;
                }
            }
        }

        return true;
    }

    async function handleSubmit() {
        if (!checkValidate()) return;

        if (applyList.length < 1) {
            alert('신청 항목을 선택해 주세요');
            return;
        }
        try {
            setLoading(true);
            const sendData = applyList.map((list) => {
                if (list === "FX") {
                    const detail = { 입고일자: ibgoDay, ...fxrt };
                    return {
                        requester: user?.seq,
                        userName: dummyUserData.name,
                        userPhone: dummyUserData.phone,
                        industry: 'FX',
                        service: 'FXA',
                        title: `사고수리: ${fxrt['차종']} (${dummyUserData.name})`,
                        num: `FXA-${makeOrderNum()}`,
                        detail: JSON.stringify(detail),
                        sido: fxRtSidogunguVal.sido.substring(0, 2),
                        sigungu: fxRtSidogunguVal.sigungu.substring(2, 5),
                    };
                }
                if (list === "RT") {
                    return {
                        requester: user?.seq,
                        userName: dummyUserData.name,
                        userPhone: dummyUserData.phone,
                        industry: 'RT',
                        service: 'RTA',
                        title: `사고대차: ${fxrt['차종']} (${dummyUserData.name})`,
                        num: `RTA-${makeOrderNum()}`,
                        detail: JSON.stringify(fxrt),
                        sido: fxRtSidogunguVal.sido.substring(0, 2),
                        sigungu: fxRtSidogunguVal.sigungu.substring(2, 5),
                    };
                }
                if (list === "DE") {
                    const phoneS = `${phoneS1}-${phoneS2}-${phoneS3}`;
                    const phoneE = `${phoneE1}-${phoneE2}-${phoneE3}`;
                    const detail = de;
                    detail['출발지연락처'] = phoneS;
                    detail['도착지연락처'] = phoneE;
                    return {
                        requester: user?.seq,
                        userName: dummyUserData.name,
                        userPhone: dummyUserData.phone,
                        industry: 'DE',
                        service: 'DED',
                        title: `탁송: ${makeLocName('start')} / ${makeLocName('end')}`,
                        num: `DED-${makeOrderNum()}`,
                        detail: JSON.stringify(detail),
                        sido: deSidogunguVal.sido,
                        sigungu: deSidogunguVal.sigungu
                    };
                }
            }).filter(Boolean);
            const res = await fetch("/api/order/insertOrder", {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sendData),
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message);
            const hasFail = result.message.some((r: any) => r.success === false);
            if (hasFail) {
                const errors = result.message
                    .filter((r: any) => !r.success)
                    .map((r: any) => `[${r.index}] ${r.error ?? 'unknown error'}`)
                    .join('\n');
                throw new Error(errors);
            }
            console.log(`result: ${JSON.stringify(result.message)}`);
            navigate("/myOrder");
        } catch (error: any) {
            console.error(`Insert Err ${error}`);
            alert(`신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요. \n${error.message}`);
        } finally {
            setLoading(false);
        }
    }


    return (
        <>
            {popup && <Postcode handleComplete={handleBtnFindAddr} handleAddr={handleAddr} />}
            <Header />
            <article className="mainContainer service-apply">
                <section className="top">
                    <img src="/img/titlePic_serviceApply.png" />
                    <div className="title-area">
                        <div className='title'>
                            <span>OneStop</span>SERVICE
                        </div>
                        <div className='content'>
                            사고가 났을때~ 복잡한 절차 없이 간편하게
                        </div>
                    </div>
                </section>
                {loading
                    ? <LoadingIndicator size={150} />
                    : <>
                        <ul className="service-check-area">
                            <li>
                                <figure>
                                    <img src="/img/mem_serviceALL.png" />
                                    <figcaption>통합서비스</figcaption>
                                </figure>
                                <input type="checkbox" value="all" checked={applyList.includes("all")} onChange={() => handleCheck("all")} />
                            </li>
                            <li>
                                <figure>
                                    <img src="/img/mem_serviceFX.png" />
                                    <figcaption>수리신청</figcaption>
                                </figure>
                                <input type="checkbox" value="all" checked={applyList.includes("all") || applyList.includes("FX")} onChange={() => handleCheck("FX")} />
                            </li>
                            <li>
                                <figure>
                                    <img src="/img/mem_serviceRT.png" />
                                    <figcaption>대차신청</figcaption>
                                </figure>
                                <input type="checkbox" value="RT" checked={applyList.includes("all") || applyList.includes("RT")} onChange={() => handleCheck("RT")} />
                            </li>
                            <li>
                                <figure>
                                    <img src="/img/mem_serviceDE.png" />
                                    <figcaption>탁송신청</figcaption>
                                </figure>
                                <input type="checkbox" value="DE" checked={applyList.includes("all") || applyList.includes("DE")} onChange={() => handleCheck("DE")} />
                            </li>
                        </ul>

                        <div className="default">
                            <section className="title"><PiAddressBookTabsDuotone className="icon" /><span>신청자정보</span></section>
                            <section className="content">
                                <div className="user-row">
                                    <PiUserDuotone className="icon" />
                                    <span>신청자 : </span>
                                    <input
                                        type="text"
                                        value={dummyUserData.name}
                                        ref={(el) => { userRefs.current[0] = el }}
                                        placeholder="신청자 이름"
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
                                        ref={(el) => { userRefs.current[1] = el }}
                                        onChange={(e) => setDummyUserData((prev) => ({ ...prev, phone: e.target.value }))}
                                    />
                                </div>
                            </section>
                        </div>

                        {(applyList.includes("all") || applyList.includes("FX")) &&
                            <div className="default">
                                <section className="title"><IoBuild className="icon blue" /><span>수리신청</span></section>
                                <section className="content">
                                    <p><FaStarOfLife className="icon" />입고일자 입력</p>
                                    <input
                                        type="text"
                                        placeholder={`입고일자 입력`}
                                        value={ibgoDay}
                                        ref={ibgoRef}
                                        onChange={(e) => setibgoDay(e.target.value)}
                                    />
                                    {Object.entries(fxrt).map(([key, val], idx) =>
                                        <Fragment key={idx}>
                                            <p><FaStarOfLife className="icon" />{key} 입력</p>
                                            <input
                                                type="text"
                                                placeholder={`${key} 입력`}
                                                name={key}
                                                value={val}
                                                ref={(el) => { fxRefs.current[idx] = el }}
                                                onChange={(e) => {
                                                    setFxrt((prev) => ({ ...prev, [key]: e.target.value }));
                                                }} />
                                        </Fragment>
                                    )}
                                    <p><FaStarOfLife className="icon" />지역 선택</p>
                                    <div className="twice">
                                        <select
                                            value={fxRtSidogunguVal.sido}
                                            ref={(el) => { fxRefs.current[4] = el }}
                                            onChange={
                                                (e) => {
                                                    getSigungu(e);
                                                    setFxRtSidogunguVal((prev) => ({ ...prev, sido: e.target.value }));
                                                }
                                            }
                                        >
                                            <option value={'0'}>시.도 선택</option>
                                            {sidoCode.map((el) => <option key={el.code} value={el.code}>{el.name}</option>)}
                                        </select>
                                        <select
                                            value={fxRtSidogunguVal.sigungu}
                                            ref={(el) => { fxRefs.current[5] = el }}
                                            onChange={
                                                (e) => {
                                                    setFxRtSidogunguVal((prev) => ({ ...prev, sigungu: e.target.value }));
                                                }
                                            }
                                        >
                                            <option value={'0'}>시.군.구 선택</option>
                                            {sigunguCode.map((el) => <option key={el.code} value={el.code}>{el.name.split(" ")[1]} {el.name.split(" ")[2] && el.name.split(" ")[2]}</option>)}
                                        </select>
                                    </div>
                                </section>
                            </div>
                        }

                        {(applyList.includes("all") || applyList.includes("RT")) &&
                            <div className="default">
                                <section className="title"><IoCarSport className="icon blue" /><span>대차신청</span></section>
                                <section className="content">
                                    {Object.entries(fxrt).map(([key, val], idx) =>
                                        <Fragment key={idx}>
                                            <p><FaStarOfLife className="icon" />{key} 입력</p>
                                            <input
                                                type="text"
                                                placeholder={`${key} 입력`}
                                                name={key}
                                                value={val}
                                                ref={(el) => { rtRefs.current[idx] = el }}
                                                onChange={(e) => {
                                                    setFxrt((prev) => ({ ...prev, [key]: e.target.value }));
                                                }} />
                                        </Fragment>
                                    )}
                                    <p><FaStarOfLife className="icon" />지역 선택</p>
                                    <div className="twice">
                                        <select
                                            value={fxRtSidogunguVal.sido}
                                            ref={(el) => { rtRefs.current[4] = el }}
                                            onChange={
                                                (e) => {
                                                    getSigungu(e);
                                                    setFxRtSidogunguVal((prev) => ({ ...prev, sido: e.target.value }));
                                                }
                                            }
                                        >
                                            <option value={'0'}>시.도 선택</option>
                                            {sidoCode.map((el) => <option key={el.code} value={el.code}>{el.name}</option>)}
                                        </select>
                                        <select
                                            value={fxRtSidogunguVal.sigungu}
                                            ref={(el) => { rtRefs.current[5] = el }}
                                            onChange={
                                                (e) => {
                                                    setFxRtSidogunguVal((prev) => ({ ...prev, sigungu: e.target.value }));
                                                }
                                            }
                                        >
                                            <option value={'0'}>시.군.구 선택</option>
                                            {sigunguCode.map((el) => <option key={el.code} value={el.code}>{el.name.split(" ")[1]}</option>)}
                                        </select>
                                    </div>
                                </section>
                            </div>
                        }


                        {(applyList.includes("all") || applyList.includes("DE")) &&
                            <div className="default">
                                <section className="title"><IoLocationSharp className="icon blue" /><span>탁송신청</span></section>
                                <section className="content">
                                    <p><FaStarOfLife className="icon" />차량번호</p>
                                    <input type="text" ref={(el) => { deRefs.current.carNum = el }} placeholder="차량번호" value={de['차량번호']} onChange={(e) => setDe((prev) => ({ ...prev, ['차량번호']: e.target.value }))} />
                                    <p><FaStarOfLife className="icon" />예약시간</p>
                                    <input type="text" ref={(el) => { deRefs.current.time = el }} placeholder="예약시간" value={de['예약시간']} onChange={(e) => setDe((prev) => ({ ...prev, ['예약시간']: e.target.value }))} />
                                    <p><FaStarOfLife className="icon" />출발지 연락처</p>
                                    <div className="group">
                                        <input
                                            type="text"
                                            ref={(el) => { phoneRefs.current[0] = el }}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="centerContent"
                                            maxLength={3}
                                            value={phoneS1}
                                            onChange={(e) => {
                                                const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
                                                setPhoneS1(onlyNumber);
                                            }}
                                        /><span>-</span>

                                        <input
                                            type="text"
                                            ref={(el) => { phoneRefs.current[1] = el }}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="centerContent"
                                            maxLength={4}
                                            value={phoneS2}
                                            onChange={(e) => {
                                                const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
                                                setPhoneS2(onlyNumber);
                                            }}
                                        /><span>-</span>

                                        <input
                                            type="text"
                                            ref={(el) => { phoneRefs.current[2] = el }}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="centerContent"
                                            maxLength={4}
                                            value={phoneS3}
                                            onChange={(e) => {
                                                const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
                                                setPhoneS3(onlyNumber)
                                            }} />
                                    </div>
                                    <p><FaStarOfLife className="icon" />출발지주소</p>
                                    <div className="group">
                                        <input type="text" ref={(el) => { deRefs.current.startJuso = el }}
                                            placeholder="출발지 주소" value={de['출발지주소']} readOnly
                                            onClick={() => { handleBtnFindAddr(); setDeAddrTarget('start'); }}
                                        />
                                        <button type="button" className="addr" onClick={() => { handleBtnFindAddr(); setDeAddrTarget('start'); }}>주소검색</button>
                                    </div>
                                    <p><FaStarOfLife className="icon" />도착지 연락처</p>
                                    <div className="group">
                                        <input
                                            type="text"
                                            ref={(el) => { phoneRefs.current[3] = el }}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="centerContent"
                                            maxLength={3}
                                            value={phoneE1}
                                            onChange={(e) => {
                                                const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
                                                setPhoneE1(onlyNumber)
                                            }}
                                        /><span>-</span>

                                        <input
                                            type="text"
                                            ref={(el) => { phoneRefs.current[4] = el }}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="centerContent"
                                            maxLength={4}
                                            value={phoneE2}
                                            onChange={(e) => {
                                                const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
                                                setPhoneE2(onlyNumber)
                                            }}
                                        /><span>-</span>

                                        <input
                                            type="text"
                                            ref={(el) => { phoneRefs.current[5] = el }}
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            className="centerContent"
                                            maxLength={4}
                                            value={phoneE3}
                                            onChange={(e) => {
                                                const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
                                                setPhoneE3(onlyNumber)
                                            }}
                                        />
                                    </div>
                                    <p><FaStarOfLife className="icon" />도착지 주소</p>
                                    <div className="group">
                                        <input type="text" ref={(el) => { deRefs.current.endJuso = el }}
                                            placeholder="도착지 주소" value={de['도착지주소']} readOnly
                                            onClick={() => { handleBtnFindAddr(); setDeAddrTarget('end'); }}
                                        />
                                        <button type="button" className="addr" onClick={() => { handleBtnFindAddr(); setDeAddrTarget('end'); }}>주소검색</button>
                                    </div>
                                    <p><FaStarOfLife className="icon" />결재방식</p>
                                    <input type="text" ref={(el) => { deRefs.current.payType = el }}
                                        placeholder="결재방식" value={de['결재방식']} onChange={(e) => setDe((prev) => ({ ...prev, ['결재방식']: e.target.value }))}
                                    />
                                </section>
                            </div>
                        }

                        <div className="btnArea">
                            <button type="button" onClick={handleSubmit}>신청하기</button>
                            <button type="button" className="cancel">취소</button>
                        </div>
                    </>
                }

            </article>
        </>

    );
}

export default ServiceApply;
