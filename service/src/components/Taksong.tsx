import React from "react";
import "@scss/components/_taksong.scss";

const Taksong: React.FC = () => {
   return (
      <section className='taksong'>
         <div className='container'>
            <div className='text-content'>
               <h1>+α</h1>
               <h2>
                  <div>탁송으로 편하게,</div> <div><span>3%</span> 더 돌려받자</div>
               </h2>
               <p>
                  편리함은 기본, 추가 혜택은 보너스! <span>탁송 이용만 해도 캐시백에 3%가 더!</span>
                  탁송 이용 고객께 3% 적립금을 추가로 지급합니다.
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
