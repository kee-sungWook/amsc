import React from "react";
import "@scss/components/_intrance.scss";

const Intrance: React.FC = () => {
   return (
      <section className='intrance'>
         <div className='container'>
            <div className='text-content'>
               <h4>
                  사고수리 <span>사고대차</span>
               </h4>
               <h4>탁송 서비스까지 한번에.. </h4>
               <h1>
                  품격있는 서비스
                  <br />
                  <span>리워드를</span> 더하다
               </h1>
            </div>
            <div className='image-content'>
               <img src='/img/img1.png' alt='Hero Illustration' />
            </div>
         </div>
      </section>
   );
};

export default Intrance;
