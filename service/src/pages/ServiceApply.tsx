import "@scss/pages/_serviceApply.scss";
import Header from "@components/Header";
import { useServiceChoose } from "@store/serviceChoose";
import { SERVICE_LIST, type AllowServiceVal } from "@interface/others";
import { useEffect } from "react";
import { PiPhoneDuotone, PiUserDuotone, PiAddressBookTabsDuotone } from "react-icons/pi";
import { IoBuild, IoCarSport, IoLocationSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa6";

const ServiceApply = () => {
    const { applyList, setApplyList } = useServiceChoose();
    const serviceList: AllowServiceVal[] = [...SERVICE_LIST];

    useEffect(() => { }, []);


    function handleChange(targetVal: AllowServiceVal) {
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

    return (
        <>
            <Header />
            <article className="service-apply">
                <section className="top">
                    <img src="/img/crash.png" />
                    <div className="title-area">
                        <div className='title'>
                            <span>OneStop</span>SERVICE
                        </div>
                        <div className='content'>
                            사고가 났을때~ 복잡한 절차 없이 간편하게
                        </div>
                    </div>
                </section>

                <ul className="service-check-area">
                    <li>
                        <figure>
                            <img src="/img/mem_serviceALL.png" />
                            <figcaption>통합서비스</figcaption>
                        </figure>
                        <input type="checkbox" value="all" checked={applyList.includes("all")} onChange={() => handleChange("all")} />
                    </li>
                    <li>
                        <figure>
                            <img src="/img/mem_serviceFX.png" />
                            <figcaption>수리신청</figcaption>
                        </figure>
                        <input type="checkbox" value="all" checked={applyList.includes("all") || applyList.includes("FX")} onChange={() => handleChange("FX")} />
                    </li>
                    <li>
                        <figure>
                            <img src="/img/mem_serviceRT.png" />
                            <figcaption>대차신청</figcaption>
                        </figure>
                        <input type="checkbox" value="RT" checked={applyList.includes("all") || applyList.includes("RT")} onChange={() => handleChange("RT")} />
                    </li>
                    <li>
                        <figure>
                            <img src="/img/mem_serviceDE.png" />
                            <figcaption>탁송신청</figcaption>
                        </figure>
                        <input type="checkbox" value="DE" checked={applyList.includes("all") || applyList.includes("DE")} onChange={() => handleChange("DE")} />
                    </li>
                </ul>

                <div className="default">
                    <section className="title"><PiAddressBookTabsDuotone className="icon" /><span>신청자정보</span></section>
                    <section className="content">
                        <div className="user-row"><PiUserDuotone className="icon" />신청자 : <span>홍길동</span></div>
                        <div className="user-row"><PiPhoneDuotone className="icon" />연락처 : <span>010-1234-5678</span></div>
                    </section>
                </div>

                {(applyList.includes("all") || applyList.includes("FX")) &&
                    <div className="default">
                        <section className="title"><IoBuild className="icon blue" /><span>수리신청</span></section>
                        <section className="content">
                            <p><FaStarOfLife className="icon" />차종 입력</p>
                            <input type="text" placeholder="차종 입력" />
                            <p><FaStarOfLife className="icon" />차량번호 입력</p>
                            <input type="text" placeholder="차량번호 입력" />
                            <p><FaStarOfLife className="icon" />보험접수번호 입력</p>
                            <input type="text" placeholder="보험접수번호 입력" />
                            <p><FaStarOfLife className="icon" />과실비율 입력</p>
                            <input type="text" placeholder="과실비율 입력" />
                        </section>
                    </div>
                }

                {(applyList.includes("all") || applyList.includes("RT")) &&
                    <div className="default">
                        <section className="title"><IoCarSport className="icon blue" /><span>대차신청</span></section>
                        <section className="content">
                            <p><FaStarOfLife className="icon" />차종 입력</p>
                            <input type="text" placeholder="차종 입력" />
                            <p><FaStarOfLife className="icon" />차량번호 입력</p>
                            <input type="text" placeholder="차량번호 입력" />
                            <p><FaStarOfLife className="icon" />보험접수번호 입력</p>
                            <input type="text" placeholder="보험접수번호 입력" />
                            <p><FaStarOfLife className="icon" />과실비율 입력</p>
                            <input type="text" placeholder="과실비율 입력" />
                        </section>
                    </div>
                }


                {(applyList.includes("all") || applyList.includes("DE")) &&
                    <div className="default">
                        <section className="title"><IoLocationSharp className="icon blue" /><span>탁송신청</span></section>
                        <section className="content">
                            <p><FaStarOfLife className="icon" />차량번호</p>
                            <input type="text" placeholder="차량번호" />
                            <p><FaStarOfLife className="icon" />예약시간</p>
                            <input type="text" placeholder="예약시간" />
                            <p><FaStarOfLife className="icon" />출발지 연락처</p>
                            <div className="group">
                                <input type="text" className="centerContent" value="010" /><span>-</span>
                                <input type="text" className="centerContent" /><span>-</span>
                                <input type="text" className="centerContent" />
                            </div>
                            <p><FaStarOfLife className="icon" />출발지주소</p>
                            <div className="group">
                                <input type="text" placeholder="출발지 주소" />
                                <button type="button" className="addr">주소검색</button>
                            </div>
                            <p><FaStarOfLife className="icon" />도착지 연락처</p>
                            <div className="group">
                                <input type="text" className="centerContent" value="010" /><span>-</span>
                                <input type="text" className="centerContent" /><span>-</span>
                                <input type="text" className="centerContent" />
                            </div>
                            <p><FaStarOfLife className="icon" />도착지 주소</p>
                            <div className="group">
                                <input type="text" placeholder="도착지 주소" />
                                <button type="button" className="addr">주소검색</button>
                            </div>
                        </section>
                    </div>
                }

                <div className="btnArea">
                    <button type="button">신청하기</button>
                    <button type="button" className="cancel">취소</button>
                </div>
            </article>
        </>

    );
}

export default ServiceApply;