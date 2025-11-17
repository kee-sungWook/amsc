import React from "react";
import "@scss/components/_intrance.scss";

const Intrance: React.FC = () => {
   return (
      <section className='intrance'>
         <div className='container'>
            <div className='text-content'>
               <h4>
                  이미 쓰는 <span>사고대차</span>
               </h4>
               <h4>캐시백은 왜 안 받으세요? </h4>
               <h1>
                  사고수리 하고
                  <br />
                  <span>캐시백도</span> 받고
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
