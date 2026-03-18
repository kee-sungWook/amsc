import React from "react";
import "@scss/components/_taksong.scss";

const Taksong: React.FC = () => {
   return (
      <section className='taksong'>
         <div className='container'>
            <div className='text-content'>
               <h1>+α</h1>
               <h2>
                  <div>최상급 차량 운송 서비스</div> <div><span>VIP</span> DELIVERY</div>
               </h2>
               <p>
                  편리함은 기본, 추가 혜택은 보너스! <span>수천 건의 경험, 단 하나의 기준. 프리미엄 탁송</span>
                  아무에게나 맡기지 마십시오. 탁송도 급이 다릅니다.
               </p>
               <button>탁송서비스 신청하기</button>
            </div>
            <div className='image-content'>
               <img src='/img/car_position.png' alt='car Illustration' />
            </div>
         </div>
      </section>
   );
};

export default Taksong;
