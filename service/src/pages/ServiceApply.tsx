import "@scss/pages/_serviceApply.scss";
import Header from "@components/Header";
import { useServiceChoose } from "@store/serviceChoose";
import { SERVICE_LIST, type AllowServiceVal } from "@interface/others";
import { useEffect } from "react";

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
                    <img src="/img/document.png" />
                    <div className="title-area">
                        <div className="main">
                            <h2>메인텍스트 한글</h2>
                            <h3>mainText Eng</h3>
                        </div>
                        <h4 className="sub">subtext</h4>
                    </div>
                </section>

                <ul className="service-check-area">
                    <li>
                        <figure>
                            <img src="/img/document.png" />
                            <figcaption>통합서비스</figcaption>
                        </figure>
                        <input type="checkbox" value="all" checked={applyList.includes("all")} onChange={() => handleChange("all")} />
                    </li>
                    <li>
                        <figure>
                            <img src="/img/document.png" />
                            <figcaption>렌트</figcaption>
                        </figure>
                        <input type="checkbox" value="RT" checked={applyList.includes("all") || applyList.includes("RT")} onChange={() => handleChange("RT")} />
                    </li>
                    <li>
                        <figure>
                            <img src="/img/document.png" />
                            <figcaption>탁송</figcaption>
                        </figure>
                        <input type="checkbox" value="DE" checked={applyList.includes("all") || applyList.includes("DE")} onChange={() => handleChange("DE")} />
                    </li>
                </ul>

                <div className="default user-info">
                    <section className="title">기본정보</section>
                    <section className="content">
                        <input type="text" placeholder="고객명 입력" />
                        <input type="text" placeholder="연락처 입력" />
                    </section>
                </div>

                {(applyList.includes("all") || applyList.includes("RT")) &&
                    <div className="default">
                        <section className="title">렌트</section>
                        <section className="content">
                            <div className="select">
                                <label><input type="radio" /> 대차신청</label>
                                <label><input type="radio" /> 장기렌트</label>
                            </div>
                            <div className="inps">
                                <input type="text" placeholder="차종 입력" />
                                <input type="text" placeholder="차량번호 입력" />
                                <input type="text" placeholder="보험접수번호 입력" />
                                <input type="text" placeholder="과실비율 입력" />
                            </div>
                            <div className="inps">
                                <input type="text" placeholder=" 희망차종 입력" />
                                <input type="text" placeholder="희망배차주소 입력" />
                            </div>
                        </section>
                    </div>
                }


                {(applyList.includes("all") || applyList.includes("DE")) &&
                    <div className="default">
                        <section className="title">탁송</section>
                        <section className="content">
                            <input type="text" placeholder="도착지 연락처 입력" />
                            <input type="text" placeholder="도찾기 주소 입력" />
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