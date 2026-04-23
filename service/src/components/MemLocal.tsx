import type { LocalModel, MemberModel } from "@interface/models";
import { getSido, getSigungu } from "@utils/supporters";
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

type SidoGungu = { code: string, name: string };

const MemLocal: React.FC<Props> = ({ memData, setMemData, insertMemLocal, updateMemLocal, deleteMemLocal }) => {
    const [inputMode, setInputMode] = React.useState<boolean>(false);
    const [editIndex, setEditIndex] = React.useState<number | null>(null);
    const [submitIndex, setSubmitIndex] = React.useState<number | null>(null);

    const [sidoCode, setSidoCode] = React.useState<SidoGungu[]>([]);
    const [sigunguMap, setSigunguMap] = React.useState<Record<number, SidoGungu[]>>({});
    // const [sigunguCode, setSigunguCode] = React.useState<SidoGungu[]>([]);

    const { control, register, handleSubmit, getValues, setValue, reset } = useForm<FormValues>({
        defaultValues: { memLocals: memData.local ?? [] }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "memLocals"
    });

    // 시도 로딩
    React.useEffect(() => {
        getSido().then(setSidoCode).catch(console.error);
    }, []);

    // 초기값 기반 시군구 로딩
    React.useEffect(() => {
        const init = async () => {
            const locals = memData.local ?? [];
            const newMap: Record<number, SidoGungu[]> = {};

            for (let i = 0; i < locals.length; i++) {
                const code = locals[i].localCode;
                if (!code) continue;

                const sidoCd = code.substring(0, 2);
                const result = await getSigungu(sidoCd);
                newMap[i] = result;
            }
            setSigunguMap(newMap);
        };

        init();
    }, [memData.local]);

    const handleSidoChange = async (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const value = e.target.value;

        if (value === "0") {
            setSigunguMap(prev => ({ ...prev, [index]: [] }));
            return;
        }

        const cd = value.substring(0, 2);
        const result = await getSigungu(cd);

        setSigunguMap(prev => ({
            ...prev,
            [index]: result
        }));
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
        if (!item.seq) { // insert
            const payload = {
                memSeq: memData.seq,
                localName: item.localName,
                localCode: item.localCode,
            }
            const result = await insertMemLocal(payload);
            setMemData(prev => prev
                ? { ...prev, local: result ? [...result] : prev.local }
                : prev
            );
        } else { // update
            const payload = {
                seq: item.seq,
                memSeq: memData.seq,
                localName: item.localName,
                localCode: item.localCode,
            }
            const result = await updateMemLocal(payload);
            setMemData(prev => prev
                ? { ...prev, local: result ? [...result] : prev.local }
                : prev
            );
        }
        setEditIndex(null);
        setSubmitIndex(null);
        setInputMode(false);
    };

    return (
        <form className="member-pannel" onSubmit={handleSubmit(onSubmit)}>
            {fields.length > 0 ? (
                fields.map((list, index) => {
                    const sidoDefault = list.localCode ? list.localCode.substring(0, 2) + "00000000" : "0";

                    return (
                        <section className="row" key={list.id}>
                            {editIndex === index ? (
                                <>
                                    <div className="local-sel">
                                        {/* 시도 */}
                                        <select
                                            defaultValue={sidoDefault}
                                            onChange={(e) => handleSidoChange(e, index)}
                                        >
                                            <option value="0">시.도 선택</option>
                                            {sidoCode.map(el => (
                                                <option key={el.code} value={el.code}>
                                                    {el.name}
                                                </option>
                                            ))}
                                        </select>

                                        {/* 시군구 */}
                                        <select
                                            {...register(`memLocals.${index}.localCode`)}
                                            defaultValue={list.localCode}
                                            onChange={(e) => {
                                                const selected = sigunguMap[index]?.find(v => v.code === e.target.value);
                                                if (selected) {
                                                    setValue(`memLocals.${index}.localName`, selected.name);
                                                }
                                            }}
                                        >
                                            <option value="0">시.군.구 선택</option>
                                            {(sigunguMap[index] ?? []).map(el => (
                                                <option key={el.code} value={el.code}>
                                                    {el.name}
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