import React from "react";
import "@scss/components/_rent.scss";

const Rent: React.FC = () => {
   return (
      <section className='rent'>
         <div className='container'>
            <h1>Car Rental Service</h1>
            <h2>차가 바뀌면, 하루도 달라집니다</h2>
            <p>
               여유로운 드라이브, 가벼운 여행, 특별한 날까지.
               <br />
               지금 당신에게 딱 맞는 차를, 손쉽게 만나보세요.
            </p>
            <button>신차 렌트 서비스 신청</button>
            <img src='/img/rent1.jpg' alt='car Illustration' />
         </div>

         <div className='container'>
            <h1>Used Car Rental</h1>
            <h2>예산은 줄이고, 만족은 그대로</h2>
            <p>
               장기 계약 부담 없이, 하루부터 한 달까지 자유롭게.
               <br />
               중고렌트로 필요한 만큼만, 합리적으로 타보세요.
            </p>
            <button>중고 렌트 서비스 신청</button>
            <img src='/img/rent2.jpg' alt='car Illustration' />
         </div>
      </section>
   );
};

export default Rent;
