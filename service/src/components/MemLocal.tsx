import type { LocalModel, MemberModel, Region } from "@interface/models";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Props {
    memData: MemberModel;
    setMemData: React.Dispatch<React.SetStateAction<MemberModel>>;
    insertMemLocal: (data: Partial<LocalModel>) => Promise<LocalModel[] | undefined>;
    updateMemLocal: (data: Partial<LocalModel>) => Promise<LocalModel[] | undefined>;
    deleteMemLocal: (seq: number) => Promise<boolean>;
}

// type LocalFormItem = {
//     seq?: number;
//     localName: string;
//     localCode: string;
// }

interface FormValues {
    // memLocals: LocalFormItem[];
    memLocals: Partial<LocalModel>[];
}



const MemLocal: React.FC<Props> = ({ memData, setMemData, insertMemLocal, updateMemLocal, deleteMemLocal }) => {
    const [inputMode, setInputMode] = React.useState<boolean>(false);
    const [editIndex, setEditIndex] = React.useState<number | null>(null);
    const [submitIndex, setSubmitIndex] = React.useState<number | null>(null);

    const [sidoList, setSidoList] = React.useState<Region[]>([]);
    const [sigunguMap, setSigunguMap] = React.useState<Record<number, Region[]>>({});

    const { control, handleSubmit, getValues, setValue, watch, reset } = useForm<FormValues>({
        defaultValues: {
            memLocals: memData.local ?? []
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "memLocals"
    });

    // 전체 fields 실시간 관찰 (렌더링 동기화용)
    const watchFields = watch("memLocals");


    // 시도 로딩
    React.useEffect(() => {
        fetch("/api/region/getSido")
            .then(res => res.json())
            .then(setSidoList)
            .catch(err => console.error("시도 로딩 실패:", err));
    }, []);

    // 초기 데이터 및 memData 변경 시 Form Reset & 시군구 맵 채우기
    React.useEffect(() => {
        reset({ memLocals: memData.local ?? [] });
        // 기존 데이터들의 시군구 목록을 사전에 로드하여 매핑
        memData.local?.forEach((item, index) => {
            if (!item?.localCode) return;
            const sidoCode = item.localCode.substring(0, 2) + "00000000";
            fetchSigungu(sidoCode, index);
        });
    }, [memData.local]);

    // 시군구 로딩함수
    const fetchSigungu = async (parentCode: string, index: number) => {
        try {
            const res = await fetch(`/api/region/getSigungu/${parentCode}`);
            const data = await res.json();
            setSigunguMap(prev => ({
                ...prev, [index]: data
            }));
        } catch (err) {
            console.error('시군구 로딩 실패: ', err);
        }
    };

    // 시도 변경
    const handleSidoChange = async (code: string, index: number) => {
        if (code === "0") {
            //시도 선택 해제시 값 초기화
            setValue(`memLocals.${index}.localCode`, "");
            setValue(`memLocals.${index}.localName`, "");
            setSigunguMap(prev => {
                const copy = { ...prev };
                delete copy[index];
                return copy;
            });
            return;
        }

        const selectedSido = sidoList.find(v => v.code === code);
        const sidoName = selectedSido?.name ?? "";

        // 시군구 API 호출 및 State 저장
        await fetchSigungu(code, index);

        // 일단 시도 기준으로 코드 및 이름 저장 (시군구는 아직 선택 안 함 상태)
        setValue(`memLocals.${index}.localCode`, code);
        setValue(`memLocals.${index}.localName`, sidoName);
    };

    // 시군구 변경
    const handleSigunguChande = (selectedCode: string, index: number) => {
        const currentLocal = getValues(`memLocals.${index}`);
        const currentSidoCode = currentLocal.localCode?.substring(0, 2) + "00000000";

        if (selectedCode === "0") {
            // 시군구를 '선택 안 함'으로 돌리면 다시 상위 시도 값으로 백업
            const selectedSido = sidoList.find(v => v.code === currentSidoCode);
            setValue(`memLocals.${index}.localCode`, currentSidoCode);
            setValue(`memLocals.${index}.localName`, selectedSido?.name ?? "");
            return;
        }
        const list = sigunguMap[index] || [];
        const selectedSigungu = list.find(v => v.code === selectedCode);
        if (selectedSigungu) {
            // 전체 이름에서 시도명을 제외한 순수 시군구 이름만 자르기 (예: "경기도 포천시" -> "포천시")
            // const sidoName = sidoList.find(v => v.code === currentSidoCode)?.name || "";
            // const pureSigunguName = selectedSigungu.name.replace(sidoName, "").trim();

            setValue(`memLocals.${index}.localCode`, selectedSigungu.code);
            setValue(`memLocals.${index}.localName`, selectedSigungu.name);
            // setValue(`memLocals.${index}.localName`, pureSigunguName);
        }
    };

    const handleAdd = () => {
        append({ localName: "", localCode: "" });
        setInputMode(true);
        setEditIndex(fields.length);
    };

    const handleEdit = (index: number) => {
        setInputMode(true);
        setEditIndex(index);

        // 수정하려는 행의 기존 코드가 있다면 시군구 목록을 재확인/로드
        const item = getValues(`memLocals.${index}`);
        if (item?.localCode) {
            const sidoCode = item.localCode.substring(0, 2) + "00000000";
            fetchSigungu(sidoCode, index);
        }
    };

    const handleCancel = (index: number) => {
        const item = fields[index];
        if (!item.seq) {
            remove(index);
        } else {
            reset({ memLocals: memData.local ?? [] });
        }
        setInputMode(false);
        setEditIndex(null);
        setSubmitIndex(null);
    };

    const handleDelete = async (index: number) => {
        const item = getValues(`memLocals.${index}`);
        console.log(JSON.stringify(item));
        if (!item.seq) {
            alert('삭제할 지역의 seq 가 누락됨');
            return;
        }
        if (confirm(`${item.localName} 지역을 삭제 하시겠습니까?`) !== true) return;
        const result = await deleteMemLocal(item.seq);
        console.log('delete result : ', result)
        if (result === true) {
            remove(index);
            setMemData(prev => prev
                ? { ...prev, local: prev.local?.filter(v => v.seq !== item.seq) ?? [], }
                : prev
            );
        }
    };

    const onSubmit = async (data: FormValues) => {
        if (submitIndex === null) return;
        const item = data.memLocals[submitIndex];

        if (!item.localCode || item.localCode === "0") {
            alert("지역을 선택해 주세요");
            return;
        }
        console.log(`item : ${JSON.stringify(item)}`);

        if (!item.seq) { // insert
            const payload = {
                memSeq: memData.seq,
                localName: item.localName,
                localCode: item.localCode,
            }
            const result = await insertMemLocal(payload);
            if (result) {
                setMemData(prev => prev ? { ...prev, local: result } : prev);
            }
        } else { // update
            const payload = {
                seq: item.seq,
                memSeq: memData.seq,
                localName: item.localName,
                localCode: item.localCode,
            }
            const result = await updateMemLocal(payload);
            if (result) {
                setMemData(prev => prev ? { ...prev, local: result } : prev);
            }
        }
        setEditIndex(null);
        setSubmitIndex(null);
        setInputMode(false);
    };

    return (
        <form className="member-pannel" onSubmit={handleSubmit(onSubmit)}>
            {fields.length > 0
                ? (
                    fields.map((field, index) => {
                        // react-hook-form의 watch 값을 활용하여 실시간 UI 동기화 보장
                        const currentItem = watchFields?.[index] || field;
                        const currentCode = currentItem.localCode || "";

                        // 현재 코드 기준으로 시도코드 계산
                        const sidoCode = currentCode && currentCode.length >= 2
                            ? currentCode.substring(0, 2) + "00000000"
                            : "0";

                        const isEditing = editIndex === index;

                        return (
                            <section className="row" key={field.id}>
                                {isEditing
                                    ? <>
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
                                                value={currentCode !== sidoCode ? currentCode : "0"}
                                                onChange={(e) => handleSigunguChande(e.target.value, index)}
                                                disabled={sidoCode === "0"}
                                            >
                                                <option value="0">시.군.구 선택</option>
                                                {(sigunguMap[index] || []).map(sigungu => {
                                                    // 옵션 노출 시 시도 부분 자르기 (예: "경기도 포천시" -> "포천시")
                                                    const currentSidoName = sidoList.find(s => s.code === sidoCode)?.name || "";
                                                    const displaySigunguName = sigungu.name.replace(currentSidoName, "").trim();

                                                    return (
                                                        <option key={sigungu.code} value={sigungu.code}>
                                                            {displaySigunguName}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="controll">
                                            <button type="submit" onClick={() => setSubmitIndex(index)}>확인</button>
                                            <button type="button" className="cancel" onClick={() => handleCancel(index)}>취소</button>
                                        </div>
                                    </>
                                    : <>
                                        {/* DB에 localName이 비어있을 경우를 대비해 localCode를 기준으로 이름 출력 지원 */}
                                        <div className="local">
                                            {currentItem.localName || (
                                                <span style={{ color: "#aaa", fontSize: "13px" }}>
                                                    (지역명 누락 / 수정 필요)
                                                </span>
                                            )}
                                        </div>
                                        <div className="code">{currentItem.localCode}</div>
                                        <div className="controll">
                                            <button type="button" disabled={inputMode} onClick={() => handleEdit(index)}>수정</button>
                                            <button type="button" disabled={inputMode} className="del" onClick={() => handleDelete(index)}>삭제</button>
                                        </div>
                                    </>
                                }
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