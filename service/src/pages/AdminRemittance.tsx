import "@scss/pages/_adminWithdrawal.scss";
import React from "react";
import type { Withdrawal } from "@interface/models";
import LoadingIndicator from "@components/LoadingIndicator";
import { currencyComma, formatDate } from "@utils/supporters";

const LIMIT = 10;

const AdminRemittance: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [remittanceList, setRemittanceList] = React.useState<Withdrawal[]>([]);

    //페이징을 위한 상태 추가
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const totalPage = Math.ceil(total / LIMIT);

    React.useEffect(() => {
        getWithdrawalList();
    }, []);

    async function getWithdrawalList() {
        try {
            setLoading(true);
            const response = await fetch(`/api/user/getRemittance?page=${page}&limit=${LIMIT}`);
            const result = await response.json();
            if (!result.success) throw new Error(`${result.message}`);
            const data: Withdrawal[] = result.message;
            setRemittanceList(data);
        } catch (error) {
            console.error(`getQnaList Error : ${error}`);
        } finally {
            setLoading(false);
        }
    }
    return (
        <article className="admin-withdrawal">
            <h3>AMS Admin 송금내역</h3>
            {loading
                ? <LoadingIndicator size={120} />
                : remittanceList.length > 0
                    ? <>
                        {remittanceList.map((list) => (
                            <div className="remittance-list" key={list.seq}>
                                <div className="amount">₩ {currencyComma(Number(list.amount)).replace("-", "")}</div>
                                <section>
                                    <div>
                                        <span className="head">요청자 :</span> <b className="user">{list.name}</b>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="head">{list.subject.split("/")[0]}</span>
                                    </div>
                                    <div><span className="head">{list.subject.split("/")[1]}</span></div>
                                </section>
                                <div className="eday">
                                    송금완료 : <span>{formatDate(list.eday!)}</span>
                                </div>

                            </div>
                        ))}
                    </>
                    : <section className="common-no-data">등록된 목록이 없습니다.</section>
            }
        </article>
    );
}

export default AdminRemittance;