import type { FeeRateModel, MemberModel } from "@interface/models";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useForm, useFieldArray } from "react-hook-form";

interface Props {
    memData: MemberModel;
    setMemData: React.Dispatch<React.SetStateAction<MemberModel>>;
    insertMemFeeRate: (data: { memSeq: number; feeName: string; feeRate: number }) => Promise<FeeRateModel[] | undefined>;
    deleteMemFeeRate: (seq: number) => Promise<boolean>;
};

type FeeRateFormItem = {
    seq?: number;
    feeName: string;
    feeRate: number;
};

interface FormValues {
    feeRates: FeeRateFormItem[];
}

const MemFeeRate: React.FC<Props> = ({ memData, setMemData, insertMemFeeRate, deleteMemFeeRate }) => {
    const [inputMode, setInputMode] = React.useState(false);
    const [editIndex, setEditIndex] = React.useState<number | null>(null);
    const [submitIndex, setSubmitIndex] = React.useState<number | null>(null);

    // ===== form =====
    const { control, register, handleSubmit, getValues, reset, } = useForm<FormValues>({
        defaultValues: { feeRates: memData.feeRate ?? [], },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "feeRates",
    });

    // ===== handlers =====
    const handleAdd = () => {
        append({ feeName: "", feeRate: 0, });
        setInputMode(true);
        setEditIndex(fields.length);
    };
    const handleCancel = (index: number) => {
        if (!fields[index].seq) { // 신규 데이터인 경우
            remove(fields.length - 1);
            setInputMode(false);
        } else { // 기존 데이터인 경우 → 수정 모드 해제
            reset({
                feeRates: memData.feeRate ?? []
            });
            setEditIndex(null);
            setSubmitIndex(null);
            setInputMode(false);
        }
    };

    const handleDelete = async (index: number) => {
        setInputMode(false);
        const item = getValues(`feeRates.${index}`);
        if (item.seq) {
            // 기존 데이터 → 삭제
            if (confirm(`${memData.company} ${item.feeName} ${item.feeRate}% 항목을 정말 삭제하시겠습니까?`) !== true) return;
            const result = await deleteMemFeeRate(item.seq);
            if (result === true) {
                remove(index);
                setMemData(prev => prev
                    ? { ...prev, feeRate: prev.feeRate?.filter(v => v.seq !== item.seq) ?? [], }
                    : prev
                );
            }
        } else {
            // 신규 데이터 → 제거
            remove(index);
        }
    };


    const onSubmit = async (data: FormValues) => {
        console.log("submit", data);
        if (submitIndex === null) return;
        const item = data.feeRates[submitIndex];

        if (!item.seq) {
            console.log("insert", item);
            const payload = {
                memSeq: memData.seq,
                feeName: item.feeName,
                feeRate: item.feeRate,
            }
            const result = await insertMemFeeRate(payload);
            setMemData(prev => prev
                ? { ...prev, feeRate: result ? [...(prev.feeRate ?? []), ...result] : prev.feeRate, }
                : prev
            );
        } else {
            console.log("update", item);
        }

        setSubmitIndex(null);
        setEditIndex(null);
        setInputMode(false);

        // console.log("submit", data);
        // const insertList = data.feeRates.filter(
        //     v => !v.seq && !v.isDeleted
        // );

        // const updateList = data.feeRates.filter(
        //     v => v.seq && !v.isDeleted
        // );

        // const deleteList = data.feeRates.filter(
        //     v => v.seq && v.isDeleted
        // );

        // console.log({
        //     insertList,
        //     updateList,
        //     deleteList,
        // });

        // // 👉 API 호출 후
        // // reset(serverData);
    };

    // ===== render =====
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <article className="member-pannel">
                {fields.length > 0 ? (
                    fields.map((list, index) => {
                        return (
                            <section className="row" key={list.id}>
                                <div className="name">
                                    {editIndex === index
                                        ? <input type="text" {...register(`feeRates.${index}.feeName`)} />
                                        : list.feeName
                                    }
                                </div>
                                <div className="rate">
                                    {editIndex === index
                                        ? <input type="number" {...register(`feeRates.${index}.feeRate`, { valueAsNumber: true })} />
                                        : <span>{list.feeRate}</span>
                                    }
                                    %
                                </div>
                                <div className="controll">
                                    {editIndex === index
                                        ? <>
                                            <button type="submit" onClick={() => setSubmitIndex(index)}>확인</button>
                                            <button type="button" className="cancel" onClick={() => handleCancel(index)}>취소</button>
                                        </>
                                        : <>
                                            <button type="button" disabled={inputMode} onClick={() => setEditIndex(index)}>수정</button>
                                            <button type="button" disabled={inputMode} className="del" onClick={() => handleDelete(index)}>삭제</button>
                                        </>
                                    }
                                </div>
                            </section>
                        );
                    })
                ) : (
                    <div className="no-data">입력된 데이터가 없습니다.</div>
                )}

                {!inputMode &&
                    <section className="add-row">
                        <div className="adder" onClick={handleAdd}>
                            <IoMdAddCircleOutline className="icon" /> <u>추가하기</u>
                        </div>
                    </section>
                }

            </article>
        </form>
    );
};

export default MemFeeRate;