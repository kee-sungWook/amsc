import React from "react";
import "@scss/components/_estimator.scss";

const Estimator: React.FC = () => {
    return (
        <section className='estimator'>
            <div className='container'>
                <div className='section-header'>My Cashback Estimator</div>
                <div className='service-card'>
                    <div>
                        <img src='/img/cashback.png' />
                        <span>놓치지 마세요,</span>
                        <span>돌려받을 금액을 지금 확인하세요.</span>
                    </div>
                    <div>
                        <input type='text' placeholder='수리견적 입력' />
                        <select>
                            <option>과실비율선택</option>
                            <option>100:0</option>
                            <option>9:1</option>
                            <option>8:2</option>
                            <option>7:3</option>
                            <option>6:4</option>
                        </select>
                        <button>금액확인</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Estimator;
