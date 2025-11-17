import React from "react";
import "@scss/components/_findfix.scss";

const Findfix: React.FC = () => {
   return (
      <section className='findfix'>
         <div className='container'>
            <div className='image-content'>
               <img src='/img/img2.png' alt='Autoshop Illustration' />
            </div>
            <div className='text-content'>
               <h2>믿고 맡길 곳, 바로 찾기</h2>
               <p>
                  내 차가 잘 돌봄 받는 곳, 가까이에서 바로 찾아보세요.
                  <br />
                  사고 후에도 손해 없게, 믿을 수 있는 제휴 정비소만 추천합니다.
               </p>
               <button>SEARCH</button>
            </div>
         </div>
      </section>
   );
};

export default Findfix;
