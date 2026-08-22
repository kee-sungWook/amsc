import LoadingIndicator from "@components/LoadingIndicator";
import type { Withdrawal } from "@interface/models";
import "@scss/pages/_adminWithdrawal.scss";
import { headerJson } from "@utils/constSet";
import { currencyComma } from "@utils/supporters";
import React from "react";

const AdminWithdrawal: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [withdrawalList, setWithdrawalList] = React.useState<Withdrawal[]>([]);

    React.useEffect(() => {
        getWithdrawalList();
    }, []);

    async function getWithdrawalList() {
        try {
            setLoading(true);
            const response = await fetch(`/api/user/getWithdrawalReq`);
            const result = await response.json();
            if (!result.success) throw new Error(`${result.message}`);
            const data: Withdrawal[] = result.message;
            setWithdrawalList(data);
        } catch (error) {
            console.error(`getQnaList Error : ${error}`);
        } finally {
            setLoading(false);
        }
    }

    async function updateWithdrawal(targetSeq: number, subject: string) {
        const really = confirm('입금완료 처리를 하시겠습니까?');
        if (!really) return;
        try {
            setLoading(true);
            const response = await fetch(`/api/user/withdrawalAccept`, {
                method: 'post',
                headers: headerJson,
                body: JSON.stringify({ targetSeq, subject }),
            });
            const result = await response.json();
            if (!result.success) throw new Error(`${result.message}`);
            const newList = withdrawalList.filter((list) => list.seq !== targetSeq);
            setWithdrawalList(newList);
        } catch (error) {
            console.error(`getQnaList Error : ${error}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <article className="admin-withdrawal">
            <h3>AMS Admin 출금요청</h3>
            {loading
                ? <LoadingIndicator size={120} />
                : withdrawalList.length > 0
                    ? <>
                        {withdrawalList.map((list) => (
                            <div className="withdrawal-list" key={list.seq}>
                                <section>
                                    <div><span className="head">요청자 :</span> <b className="user">{list.name}</b></div>
                                    <div><span className="head">요청일자 :</span>{list.subject.replace('요청일 : ', '')}</div>
                                    <div className="amount">
                                        <span className="head">요청금액 :</span>
                                        <b>{currencyComma(Number(list.amount)).replace("-", "")}</b>
                                        <span className="balance">잔여포인트 : {currencyComma(Number(list.balance))}</span>
                                    </div>
                                    <div><span className="head">은행 :</span><span className="bank">{`${list.bankName}(예금주: ${list.owner})`}</span></div>
                                    <div><span className="head">계좌 :</span><span className="bank">{list.accountNum}</span></div>
                                </section>
                                <button type="button" onClick={() => updateWithdrawal(
                                    list.seq, `${list.bankName}(${list.owner}) ${list.accountNum}`
                                )}>입금완료</button>
                            </div>
                        ))}
                    </>
                    : <section className="common-no-data">등록된 목록이 없습니다.</section>
            }
        </article>
    );
}

export default AdminWithdrawal;