import "@scss/components/_services.scss";

const Services = () => {
   return (
      <section className='services'>
         <div className='txtArea'>
            <div className='title'>
               <span>OneStop</span> SERVICE
            </div>
            <div className='content'>
               정비부터 보험, 렌트까지 복잡한 절차 없이 간편하게
            </div>
         </div>
         <div className='container'>
            <figure>
               <img src='/img/mem_serviceFX.png' />
               <figcaption>보험수리</figcaption>
            </figure>
            <figure>
               <img src='/img/mem_serviceIS.png' />
               <figcaption>보험</figcaption>
            </figure>
            <figure>
               <img src='/img/mem_serviceRT.png' />
               <figcaption>보험대차</figcaption>
            </figure>
            <figure>
               <img src='/img/mem_serviceDE.png' />
               <figcaption>탁송</figcaption>
            </figure>
            {/* <figure>
               <img src='/img/mem_serviceCC.png' />
               <figcaption>카케어</figcaption>
            </figure> */}
         </div>
      </section>
   );
};

export default Services;
