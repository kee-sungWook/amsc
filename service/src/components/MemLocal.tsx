import type { LocalModel, MemberModel, Region } from "@interface/models";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Props {
    memData: MemberModel;
    setMemData: React.Dispatch<React.SetStateAction<MemberModel>>;
    insertMemLocal: (data: { memSeq: number; localName: string; localCode: string }) => Promise<LocalModel[] | undefined>;
    updateMemLocal: (data: { seq: number; memSeq: number; localName: string; localCode: string }) => Promise<LocalModel[] | undefined>;
    deleteMemLocal: (seq: number) => Promise<boolean>;
}

type LocalFormItem = {
    seq?: number;
    localName: string;
    localCode: string;
}

interface FormValues {
    memLocals: LocalFormItem[];
}



const MemLocal: React.FC<Props> = ({ memData, setMemData, insertMemLocal, updateMemLocal, deleteMemLocal }) => {
    const [inputMode, setInputMode] = React.useState<boolean>(false);
    const [editIndex, setEditIndex] = React.useState<number | null>(null);
    const [submitIndex, setSubmitIndex] = React.useState<number | null>(null);

    const [sidoList, setSidoList] = React.useState<Region[]>([]);
    const [sigunguMap, setSigunguMap] = React.useState<Record<number, Region[]>>({});

    const { control, register, handleSubmit, getValues, setValue, watch, reset } = useForm<FormValues>({
        defaultValues: { memLocals: memData.local ?? [] }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "memLocals"
    });

    const values = watch('memLocals');

    // 시도 로딩
    React.useEffect(() => {
        fetch("/api/region/getSido")
            .then(res => res.json())
            .then(setSidoList)
    }, []);


    // 시군구 로딩함수
    const fetchSigungu = async (parentCode: string, index: number) => {
        const res = await fetch(`/api/region/getSigungu/${parentCode}`);
        const data = await res.json();
        setSigunguMap(prev => ({
            ...prev, [index]: data
        }));
    };

    // 초기값 처리 (edit 모드 핵심)
    React.useEffect(() => {
        getValues('memLocals').forEach((item, index) => {
            if (!item?.localCode) return;
            const sidoCode = item.localCode.substring(0, 2) + "00000000";
            fetchSigungu(sidoCode, index);
        });
    }, []);

    // 시도 변경
    const handleSidoChange = async (code: string, index: number) => {
        console.log(`code : ${code}`);
        console.log(`index : ${index}`);
        fetchSigungu(code, index);
        setValue(`memLocals.${index}.localCode`, code); // 시군구 초기화
        setValue(`memLocals.${index}.localName`, sidoList[index].name); // 시군구 초기화
    };

    const handleAdd = () => {
        append({ localName: "", localCode: "0" });
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
            const result = await deleteMemLocal(item.seq);
            if (result === true) {
                remove(index);
                setMemData(prev => prev
                    ? { ...prev, local: prev.local?.filter(v => v.seq !== item.seq) ?? [], }
                    : prev
                );
            }
        } else {
            remove(index);
        }
    };

    const onSubmit = async (data: FormValues) => {
        if (submitIndex === null) return;
        const item = data.memLocals[submitIndex];
        console.log(`data :`, data);
        console.log(`submitIndex :`, submitIndex);
        console.log(`item :`, item);
        // if (!item.seq) { // insert
        //     const payload = {
        //         memSeq: memData.seq,
        //         localName: item.localName,
        //         localCode: item.localCode,
        //     }
        //     const result = await insertMemLocal(payload);
        //     setMemData(prev => prev
        //         ? { ...prev, local: result ? [...result] : prev.local }
        //         : prev
        //     );
        // } else { // update
        //     const payload = {
        //         seq: item.seq,
        //         memSeq: memData.seq,
        //         localName: item.localName,
        //         localCode: item.localCode,
        //     }
        //     const result = await updateMemLocal(payload);
        //     setMemData(prev => prev
        //         ? { ...prev, local: result ? [...result] : prev.local }
        //         : prev
        //     );
        // }
        // setEditIndex(null);
        // setSubmitIndex(null);
        // setInputMode(false);
    };

    return (
        <form className="member-pannel" onSubmit={handleSubmit(onSubmit)}>
            {fields.length > 0 ? (
                fields.map((list, index) => {
                    const currentCode = values?.[index]?.localCode;
                    const sidoCode = currentCode
                        ? currentCode.substring(0, 2) + "00000000"
                        : "";

                    return (
                        <section className="row" key={list.id}>
                            {editIndex === index ? (
                                <>
                                    <div className="local-sel">
                                        {/* 시도 */}
                                        <select
                                            value={sidoCode}
                                            onChange={(e) => handleSidoChange(e.target.value, index)}
                                        >
                                            <option value="0">시.도 선택</option>
                                            {sidoList.map(sido => (
                                                <option key={sido.code} value={sido.code}>
                                                    {sido.name}
                                                </option>
                                            ))}
                                        </select>

                                        {/* 시군구 */}
                                        <select
                                            {...register(`memLocals.${index}.localCode`)}
                                            value={currentCode || ""}
                                            onChange={(e) => {
                                                const selectedCode = e.target.value;
                                                const selected = (sigunguMap[index] || []).find(
                                                    (v) => v.code === selectedCode
                                                );
                                                setValue(`memLocals.${index}.localCode`, e.target.value);
                                                if (selected) {
                                                    setValue(`memLocals.${index}.localName`, selected.name);
                                                }
                                            }}
                                            disabled={!sidoCode}
                                        >
                                            <option value="0">시.군.구 선택</option>
                                            {(sigunguMap[index] || []).map(sigungu => (
                                                <option key={sigungu.code} value={sigungu.code}>
                                                    {sigungu.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="controll">
                                        <button type="submit" onClick={() => setSubmitIndex(index)}>확인</button>
                                        <button type="button" className="cancel" onClick={() => handleCancel(index)}>취소</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="local">{list.localName}</div>
                                    <div className="code">{list.localCode}</div>
                                    <div className="controll">
                                        <button type="button" disabled={inputMode} onClick={() => setEditIndex(index)}>수정</button>
                                        <button type="button" disabled={inputMode} className="del" onClick={() => handleDelete(index)}>삭제</button>
                                    </div>
                                </>
                            )}
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
        </form>
    );
}

export default MemLocal;