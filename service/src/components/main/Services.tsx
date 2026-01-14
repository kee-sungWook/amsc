import "@scss/components/_services.scss";
import { useServiceChoose } from "@store/serviceChoose";
import { SERVICE_LIST, type AllowServiceVal } from "@interface/others";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const { setApplyList } = useServiceChoose();
    const navigate = useNavigate();

    function handleApplyList(addName: AllowServiceVal) {
        let allowList: AllowServiceVal[] = [];
        if (addName === "all") {
            allowList = ["all", ...SERVICE_LIST];
            setApplyList(allowList);
        } else {
            allowList = [addName];
            setApplyList(allowList);
        }
        navigate("/service");
    }
    return (
        <section className='services'>
            <div className='txtArea'>
                <div className='title'>
                    <span>OneStop</span> SERVICE
                </div>
                <div className='content'>
                    사고가 났을때~ 복잡한 절차 없이 간편하게
                </div>
            </div>
            <div className='container'>
                <figure onClick={() => handleApplyList("all")}>
                    <img src='/img/mem_serviceALL.png' />
                    <figcaption>통합신청</figcaption>
                </figure>
                <figure onClick={() => handleApplyList("FX")}>
                    <img src='/img/mem_serviceFX.png' />
                    <figcaption>수리신청</figcaption>
                </figure>
                <figure onClick={() => handleApplyList("RT")}>
                    <img src='/img/mem_serviceRT.png' />
                    <figcaption>대차신청</figcaption>
                </figure>
                <figure onClick={() => handleApplyList("DE")}>
                    <img src='/img/mem_serviceDE.png' />
                    <figcaption>탁송신청</figcaption>
                </figure>

            </div>
        </section>
    );
};

export default Services;
