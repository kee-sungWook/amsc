import React from "react";

import { CgCloseR } from "react-icons/cg";

interface Props {
    setBankRegisterMode: React.Dispatch<React.SetStateAction<boolean>>;
    registerBankAccount: (bankName: string, owner: string, accountNum: string) => void;
}

const BankRegist: React.FC<Props> = ({ setBankRegisterMode, registerBankAccount }) => {
    const [bankData, setBankData] = React.useState<Record<string, string>>({
        bankName: "",
        owner: "",
        accountNum: "",
    });
    const refs = React.useRef<Record<string, HTMLInputElement | null>>({
        bankNameRef: null,
        ownerRef: null,
        accountNumRef: null,
    });

    function validateInput() {
        const { bankName, owner, accountNum } = bankData;
        if (!bankName.trim()) {
            alert("은행명을 입력해주세요.");
            refs.current.bankNameRef?.focus();
            return false;
        }
        if (!owner.trim()) {
            alert("예금주명을 입력해주세요.");
            refs.current.ownerRef?.focus();
            return false;
        }
        if (!accountNum.trim() || accountNum.length < 10) {
            alert("계좌번호는 최소 10자리 이상이어야 합니다.");
            refs.current.accountNumRef?.focus();
            return false;
        }
        return true;
    }

    function handleRegister() {
        if (!validateInput()) return;
        registerBankAccount(bankData.bankName, bankData.owner, bankData.accountNum);
    }

    return (
        <article className="bank-register-area">
            <div className="register-box">
                <h3>계좌 등록하기</h3>
                <CgCloseR className="close-btn" onClick={() => setBankRegisterMode(false)} />
                <div className="input-area">
                    <label htmlFor="bank">은행명</label>
                    <input
                        type="text" id="bank" placeholder="은행명." ref={(el) => { refs.current.bankNameRef = el; }}
                        value={bankData.bankName} onChange={(e) => setBankData({ ...bankData, bankName: e.target.value })}
                    />
                </div>
                <div className="input-area">
                    <label htmlFor="account-holder">예금주</label>
                    <input
                        type="text" id="account-holder" placeholder="예금주명." ref={(el) => { refs.current.ownerRef = el; }}
                        value={bankData.owner} onChange={(e) => setBankData({ ...bankData, owner: e.target.value })}
                    />
                </div>
                <div className="input-area">
                    <label htmlFor="account-number">계좌번호</label>
                    <input
                        type="text" id="account-number" placeholder="숫자만 입력." ref={(el) => { refs.current.accountNumRef = el; }}
                        value={bankData.accountNum} onChange={(e) => {
                            let value = e.target.value;
                            value = value.replace(/[^0-9]/g, ""); // 숫자만 허용

                            setBankData({ ...bankData, accountNum: value })
                        }}
                    />
                </div>
                <div className="btn-area">
                    <button type="button" onClick={handleRegister}>등록</button>
                    <button type="button" className="cancel" onClick={() => setBankRegisterMode(false)}>취소</button>
                </div>
            </div>
        </article>
    );
}

export default BankRegist;