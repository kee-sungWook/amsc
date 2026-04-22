import type { MemberModel } from "@interface/models";
import { getSido, getSigungu } from "@utils/supporters";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Props {
    memData: MemberModel;
    setMemData: React.Dispatch<React.SetStateAction<MemberModel>>;
}

type LocalFormItem = {
    seq?: number;
    localName: string;
    localCode: string;
}

interface FormValues {
    memLocals: LocalFormItem[];
}

type SidoGungu = { code: string, name: string };

const MemLocal: React.FC<Props> = ({ memData }) => {
    const [inputMode, setInputMode] = React.useState<boolean>(false);
    const [editIndex, setEditIndex] = React.useState<number | null>(null);
    const [submitIndex, setSubmitIndex] = React.useState<number | null>(null);
    const [sidoCode, setSidoCode] = React.useState<SidoGungu[]>([]);
    const [sigunguCode, setSigunguCode] = React.useState<SidoGungu[]>([]);

    const { control, register, handleSubmit, getValues, reset } = useForm<FormValues>({ defaultValues: { memLocals: memData.local ?? [] } });
    const { fields, append, remove } = useFieldArray({ control, name: "memLocals" });

    React.useEffect(() => {
        getSido()
            .then((val: SidoGungu[]) => setSidoCode(val))
            .catch(err => console.error(err));
    }, [getSido]);

    const getSigunguData = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '0') {
            setSigunguCode([]);
            return;
        }
        const cd = e.target.value.substring(0, 2);
        const result = await getSigungu(cd);
        setSigunguCode(result);
    };

    const handleAdd = () => {
        append({ localName: "", localCode: "" });
        setInputMode(true);
        setEditIndex(fields.length);
    };

    const handleCancel = (index: number) => {
        if (!fields[index].seq) {
            remove(fields.length - 1);
            setInputMode(false);
        } else {
            reset({ memLocals: memData.local ?? [] });
            setEditIndex(null);
            setSubmitIndex(null);
            setInputMode(false);
        }
    };

    const handleDelete = async (index: number) => {
        setInputMode(false);
        const item = getValues(`memLocals.${index}`);
        if (item.seq) {
            if (confirm(`${item.localName} 지역을 삭제 하시겠습니까?`) !== true) return;
            // api 
        } else {
            remove(index);
        }
    };

    return (
        <form className="member-pannel">
            {fields.length > 0
                ? fields.map((list, index) =>
                    <section className="row" key={list.id}>
                        {editIndex === index
                            ? <>
                                <div className="local-sel">
                                    <select onChange={(e) => getSigunguData(e)}>
                                        <option value={'0'}>시.도 선택</option>
                                        {sidoCode.map((el) => <option key={el.code} value={el.code}>{el.name}</option>)}
                                    </select>
                                    <select>
                                        <option value={'0'}>시.군.구 선택</option>
                                        {sigunguCode.map((el) => <option key={el.code} value={el.code}>{el.name.split(" ")[1]}</option>)}
                                    </select>
                                </div>
                                <div className="controll">
                                    <button type="submit">확인</button>
                                    <button type="button" className="cancel" onClick={() => handleCancel(index)}>취소</button>
                                </div>
                            </>
                            : <>
                                <div className="local">{list.localName}</div>
                                <div className="code">{list.localCode}</div>
                                <div className="controll">
                                    <button type="button" disabled={inputMode} onClick={() => setEditIndex(index)}>수정</button>
                                    <button type="button" disabled={inputMode} className="del" onClick={() => handleDelete(index)}>삭제</button>
                                </div>
                            </>
                        }
                    </section>
                )

                : <div className="no-data">입력된 데이터가 없습니다.</div>
            }

            {!inputMode &&
                <section className="add-row">
                    <div className="adder" onClick={handleAdd}>
                        <IoMdAddCircleOutline className="icon" /> <u>추가하기</u>
                    </div>
                </section>
            }
        </form>
    );
}

export default MemLocal;