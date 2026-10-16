import React from "react";
import "@scss/components/_howuse.scss";

const Howuse: React.FC = () => {
    return (
        <section className='howuse'>
            <div className='container'>
                <div className='section-header'>
                    <h2>
                        AMS <span>사고수리</span>
                        <div>
                            <span>어떻게</span> 이용하나요?
                        </div>
                    </h2>
                </div>

                <div className='doctors-grid'>
                    <div className='doctor-card'>
                        <img src='/img/smartphone.png' alt='step 1' />
                        <section>
                            <h3>1.정비소검색</h3>
                            <p>앱을 통해 정비소를 간편하게 찾아보세요. 사고대차와 전문탁송이 가능한 제휴 정비소를 확인할 수 있습니다</p>
                        </section>
                    </div>

                    <div className='doctor-card'>
                        <img src='/img/repair-shop.png' alt='step 2' />
                        <section>
                            <h3>2.직접 방문</h3>
                            <p>렉카 호출 없이 직접 정비소로 이동하세요. 중간 비용 없이 바로 방문하면 혜택을 더 크게 돌려드립니다</p>
                        </section>
                    </div>

                    <div className='doctor-card'>
                        <img src='/img/document.png' alt='step 3' />
                        <section>
                            <h3>3.접수현황 확인</h3>
                            <p>수리 진행 상황과 탁송진행 상황을 앱에서 바로 확인할 수 있어요. 진행 단계별로 알림을 받아 안심하고 맡기세요</p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Howuse;
