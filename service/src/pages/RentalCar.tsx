import "@scss/pages/_rentalCar.scss";
import Header from "@components/Header";
import { FaStarOfLife } from "react-icons/fa6";
import { PiUserDuotone, PiPhoneDuotone } from "react-icons/pi";

const RentalCar: React.FC = () => {

    function handleSubmit() { }

    return (
        <>
            <Header />
            <article className="rental-car">
                <section className="top">
                    <img src='/img/rent_apply.jpg' alt='rent Illustration' />
                    <div className="top-txt">
                        <div className='title'>
                            <span>Car</span> RENTAL
                        </div>
                        <div className='content'>
                            차가 바뀌면, 하루도 달라집니다
                        </div>
                        <div className='content2'>
                            여유로운 드라이브, 가벼운 여행, 특별한 날까지.
                            <br />
                            지금 당신에게 딱 맞는 차를, 손쉽게 만나보세요.
                        </div>
                    </div>
                </section>

                <section className="user-form">
                    <div className="user">
                        <div className="user-row"><PiUserDuotone className="icon" />신청자 : <span>홍길동</span></div>
                        <div className="user-row"><PiPhoneDuotone className="icon" />연락처 : <span>010-1234-5678</span></div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <p><FaStarOfLife className="icon" />희망차종</p>
                            <input type="text" />
                        </div>

                        <div className="form-row">
                            <p><FaStarOfLife className="icon" />렌트기간</p>
                            <div className="group">
                                <input type="date" /><span>~</span><input type="date" />
                            </div>
                        </div>

                        <div className="form-row">
                            <p><FaStarOfLife className="icon" />배차주소</p>
                            <div className="group"><input type="text" /><button type="button" className="addr">주소검색</button></div>
                            <div className="group"><input type="text" /></div>
                        </div>
                        <section className="btnArea">
                            <button >신청하기</button>
                            <button type="button" className="cancel">취소</button>
                        </section>
                    </form>
                </section>


            </article>
        </>
    );
};

export default RentalCar;