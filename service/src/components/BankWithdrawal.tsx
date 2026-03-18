import { useUserStore } from "@store/publicState";
import { currencyComma } from "@utils/supporters";
import React from "react";

import { CgCloseR } from "react-icons/cg";

interface Props {
    setWithdrawalMode: React.Dispatch<React.SetStateAction<boolean>>;
    requestWithdrawal: (amount: number) => void;
}

const BankWithdrawal: React.FC<Props> = ({ setWithdrawalMode, requestWithdrawal }) => {
    const { user } = useUserStore();
    const [amount, setAmount] = React.useState<number>(0);
    const refs = React.useRef<HTMLInputElement | null>(null);

    function validateInput() {
        if (amount < 1) {
            alert("출금 금액은 최소 1만원 이상이어야 합니다.");
            refs.current?.focus();
            return false;
        }
        if (amount > Math.trunc((user!.point || 0) / 10000)) {
            alert("출금가능 금액보다 많은 금액을 출금할 수 없습니다.");
            refs.current?.focus();
            return false;
        }
        return true;
    }

    function handleRegister() {
        if (!validateInput()) return;
        requestWithdrawal(Number(amount * 10000));
    }

    return (
        <article className="bank-register-area">
            <div className="register-box">
                <h3>
                    출금 요청
                    <div className="withdrawal-info">9시~18시 업무 시간 내 처리 &nbsp; (토,일,공휴일 제외)</div>
                </h3>
                <CgCloseR className="close-btn" onClick={() => setWithdrawalMode(false)} />

                <div className="point-display">
                    <section>총 <span>{currencyComma(user!.point || 0)}</span> pt.</section>
                    <section><span className="blue">{currencyComma(Math.trunc((user!.point || 0) / 10000))} 만원</span> 출금 가능</section>
                </div>



                <div className="input-area-withdrawal">
                    <label htmlFor="amountVal">출금 금액 입력</label>
                    <section className="total-amount">
                        <h6>만원단위로 출금가능</h6>
                        <input
                            type="text" className="amount-input" id="amountVal" placeholder="출금 금액 입력" ref={refs}
                            value={currencyComma(amount)} onChange={(e) => {
                                const val = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용
                                setAmount(Number(val));
                            }}
                        />
                        <span>만원</span>
                    </section>
                </div>

                <div className="btn-area">
                    <button type="button" onClick={handleRegister}>출금 요청</button>
                    <button type="button" className="cancel" onClick={() => setWithdrawalMode(false)}>취소</button>
                </div>
            </div>
        </article>
    );
}

export default BankWithdrawal;