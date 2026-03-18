import "@scss/pages/_mypoint.scss";
import Header from "@components/Header";
import React from "react";
import { useUserStore } from "@store/publicState";
import type { PointLog, User } from "@interface/models";
import LoadingIndicator from "@components/LoadingIndicator";
import { currencyComma } from "@utils/supporters";
import MyPointList from "@components/lists/MyPointList";

import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import BankRegist from "@components/BankRegist";
import BankWithdrawal from "@components/BankWithdrawal";

const MyPoint: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { user, setUser } = useUserStore();
    const [logList, setLogList] = React.useState<PointLog[]>([]);
    const [withdrawalMode, setWithdrawalMode] = React.useState<boolean>(false);
    const [bankRegisterMode, setBankRegisterMode] = React.useState<boolean>(false);
    const [bankData, setBankData] = React.useState<Record<string, string | null>>({
        bankName: "",
        owner: "",
        accountNum: "",
    });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [pointRes, bankRes] = await Promise.all([
                    fetch(`/api/user/getPointLog/${user?.seq}`),
                    fetch(`/api/user/getBankAccount/${user?.seq}`),
                ]);
                const pointResult = await pointRes.json();
                const bankResult = await bankRes.json();
                if (!pointResult.success) throw new Error(pointResult.message);
                if (!bankResult.success) throw new Error(bankResult.message);
                setLogList(pointResult.message);
                setBankData(bankResult.message);
            } catch (err) {
                console.error(`fetchData err ${err}`);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);



    async function registerBankAccount(bankName: string, owner: string, accountNum: string) {
        try {
            setLoading(true);
            const response = await fetch("/api/user/registerBank", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userSeq: user?.seq,
                    bankName,
                    owner,
                    accountNum,
                }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            setBankData(result.message);
        } catch (err) {
            console.error(`registerBankAccount err ${err}`);
        } finally {
            setBankRegisterMode(false);
            setLoading(false);
        }
    }

    function checkBankAccount() {
        if (bankData.bankName === "") {
            alert("출금 요청을 위해서는 은행 계좌 등록이 필요합니다.");
            return;
        } else {
            setWithdrawalMode(true);
        }
    }

    async function requestWithdrawal(amount: number) {
        setWithdrawalMode(false);
        try {
            setLoading(true);
            const response = await fetch("/api/user/withdrawalReq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userSeq: user?.seq, amount }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message);
            const newLogData = result.message;
            setLogList(prev => [newLogData, ...prev]);
            setUser({ ...user, point: newLogData.balance } as User);
        } catch (err) {
            console.error(`requestWithdrawal err ${err}`);
            alert("출금 요청 중 오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {bankRegisterMode && <BankRegist setBankRegisterMode={setBankRegisterMode} registerBankAccount={registerBankAccount} />}
            {withdrawalMode && <BankWithdrawal setWithdrawalMode={setWithdrawalMode} requestWithdrawal={requestWithdrawal} />}
            <Header />
            <article className="mainContainer my-point">
                <section className="top">
                    <img src='/img/titlePic_myPoint.png' alt='myPoint Illustration' />
                    <div className="top-txt">
                        <div className='title'>
                            <span>My</span> Point
                        </div>
                        <div className="content">{currencyComma(user!.point || 0)} <span>pt.</span></div>
                    </div>
                </section>

                {/* <section className="filter-area">filter area</section> */}

                {loading
                    ? <LoadingIndicator size={120} />
                    : <>
                        <section className="bank-account-area">
                            <img src="/img/mybank.png" alt="bank icon" />
                            <section className="account-info">
                                <h4>나의 은행 계좌</h4>
                                {bankData.bankName === ""
                                    ? <>
                                        <div className="no-account">등록된 계좌가 없습니다.</div>
                                        <button type="button" onClick={() => setBankRegisterMode(true)}>계좌 등록하기</button>
                                    </>
                                    : <>
                                        <div>은행명 : <span>{bankData.bankName}</span></div>
                                        <div>예금주 : <span>{bankData.owner}</span></div>
                                        <div>계&nbsp;&nbsp;&nbsp;좌 : <span>{bankData.accountNum}</span></div>
                                    </>
                                }
                            </section>
                            <button type="button" onClick={checkBankAccount}>
                                <HiOutlineInboxArrowDown className="icon" />
                                출금요청
                            </button>
                        </section>

                        {logList.length === 0
                            ? <div className="common-no-data">No Data.</div>
                            : logList.map((list, idx) => <MyPointList key={list.seq} pointData={list} no={logList.length - idx} />)
                        }
                    </>
                }


            </article>
        </>
    );
}

export default MyPoint;