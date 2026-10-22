import "@scss/pages/_adminIndustryManage.scss";
import { CgAdd } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import React from "react";
import { Controller, useFieldArray, useForm, type Control, type UseFormRegister } from "react-hook-form";
import { useAdminIndustry } from "@hooks/useAdminIndustry";
import { useAdminIndustryService } from "@hooks/useAdminIndustryService";
import type { IndustryPayload } from "@api/api.adminIndustry";
import LoadingIndicator from "@components/LoadingIndicator";

const DEFAULT_ICON = "/icons/ic_192.png";

type ListItem = { seq: number; name: string; code: string; icon: string | null };
type SavePayload = IndustryPayload & { seq?: number };

interface ItemFormItem {
    seq?: number;
    name: string;
    code: string;
    icon: string | null;
    iconFile: File | null;
}

interface FormValues {
    items: ItemFormItem[];
}

// 업종/서비스별 입력 규칙과 문구
interface ItemRule {
    label: string;
    codePattern: RegExp;
    upperCaseOnly: boolean;
    codeMaxLength: number;
    codeGuide: string;
}

const INDUSTRY_RULE: ItemRule = {
    label: "업종",
    codePattern: /^[A-Z]{2}$/,
    upperCaseOnly: true,
    codeMaxLength: 2,
    codeGuide: "영어 대문자 2자리"
};

const SERVICE_RULE: ItemRule = {
    label: "서비스",
    codePattern: /^[A-Za-z]{1,20}$/,
    upperCaseOnly: false,
    codeMaxLength: 20,
    codeGuide: "영문 20자 이내"
};

const toFormItems = (items: ListItem[] = []): ItemFormItem[] => items.map((v) => ({ ...v, iconFile: null }));

// 아이콘은 같은 파일명으로 덮어쓰므로 조회시점(version)으로 캐시 무효화
const iconUrl = (icon: string | null, version?: number) => (icon ? `${icon}?v=${version ?? 0}` : DEFAULT_ICON);

// 아이콘 선택 버튼 (선택된 파일 미리보기)
const IconPicker = ({
    icon,
    file,
    onChange
}: {
    icon: string;
    file: File | null;
    onChange: (file: File | null) => void;
}) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [preview, setPreview] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!file) {
            setPreview(null);
            return;
        }
        const url = URL.createObjectURL(file);
        setPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [file]);

    return (
        <div className="icon-area">
            <button
                type="button"
                title="아이콘 선택"
                onClick={() => inputRef.current?.click()}
                style={{
                    backgroundImage: `url(${preview ?? icon})`,
                    backgroundSize: "90%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            ></button>
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => onChange(e.target.files?.[0] ?? null)}
            />
        </div>
    );
};

interface EditRowProps {
    index: number;
    control: Control<FormValues>;
    register: UseFormRegister<FormValues>;
    rule: ItemRule;
    icon: string;
    submitLabel: string;
    isSaving: boolean;
    onSave: (index: number) => void;
    onCancel: () => void;
}

const ItemEditRow = ({
    index,
    control,
    register,
    rule,
    icon,
    submitLabel,
    isSaving,
    onSave,
    onCancel
}: EditRowProps) => (
    <>
        <Controller
            control={control}
            name={`items.${index}.iconFile`}
            render={({ field }) => <IconPicker icon={icon} file={field.value} onChange={field.onChange} />}
        />
        <section className="content-input-area">
            <input
                type="text"
                placeholder={`${rule.label}명 입력`}
                maxLength={30}
                {...register(`items.${index}.name`, {
                    validate: (v) => !!v.trim() || `${rule.label}명을 입력해 주세요`
                })}
            />
            <Controller
                control={control}
                name={`items.${index}.code`}
                rules={{
                    required: `${rule.label}코드를 입력해 주세요`,
                    pattern: {
                        value: rule.codePattern,
                        message: `${rule.label}코드는 ${rule.codeGuide}로 입력해 주세요`
                    }
                }}
                render={({ field }) => (
                    <input
                        {...field}
                        type="text"
                        placeholder={`${rule.label}코드 (${rule.codeGuide})`}
                        maxLength={rule.codeMaxLength}
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^A-Za-z]/g, "");
                            field.onChange(rule.upperCaseOnly ? value.toUpperCase() : value);
                        }}
                    />
                )}
            />
        </section>
        <section className="modify-btn-area">
            <button type="button" disabled={isSaving} onClick={() => onSave(index)}>
                {submitLabel}
            </button>
            <button type="button" className="cancel" onClick={onCancel}>
                취소
            </button>
        </section>
    </>
);

interface ItemListProps {
    rule: ItemRule;
    items?: ListItem[];
    version?: number;
    isSaving: boolean;
    onSave: (payload: SavePayload) => Promise<unknown>;
    selectedSeq?: number | null;
    onSelect?: (seq: number) => void;
}

// 업종/서비스 공통 목록 (조회, 추가, 수정)
const ItemList = ({ rule, items, version, isSaving, onSave, selectedSeq, onSelect }: ItemListProps) => {
    const [editIndex, setEditIndex] = React.useState<number | null>(null);

    const { control, register, reset, trigger, getValues, getFieldState } = useForm<FormValues>({
        defaultValues: { items: [] }
    });

    const { fields, append } = useFieldArray({ control, name: "items" });

    // 서버 데이터 변경 시 폼 동기화
    React.useEffect(() => {
        reset({ items: toFormItems(items) });
        setEditIndex(null);
    }, [items, reset]);

    const newIndex = fields.findIndex((field) => !field.seq);

    const handleEdit = (index: number) => {
        if (editIndex !== null) return;
        setEditIndex(index);
    };

    const handleAdd = () => {
        if (editIndex !== null) return;
        append({ name: "", code: "", icon: null, iconFile: null });
        setEditIndex(fields.length);
    };

    const handleCancel = () => {
        reset({ items: toFormItems(items) });
        setEditIndex(null);
    };

    const handleSave = async (index: number) => {
        const valid = await trigger([`items.${index}.name`, `items.${index}.code`]);
        if (!valid) {
            const error = getFieldState(`items.${index}.name`).error ?? getFieldState(`items.${index}.code`).error;
            alert(error?.message ?? "입력값을 확인해 주세요");
            return;
        }

        const { seq, name, code, iconFile } = getValues(`items.${index}`);
        try {
            await onSave({ seq, name: name.trim(), code: code.trim(), iconFile });
        } catch (err) {
            alert((err as { message?: string })?.message ?? `${rule.label} 저장에 실패했습니다.`);
        }
    };

    if (items === undefined) return <LoadingIndicator size={40} />;

    return (
        <>
            {fields.length === 0 || (fields.length === 1 && newIndex === 0) ? (
                <div className="content-list">
                    <span className="nodata">등록된 데이터가 없습니다</span>
                </div>
            ) : (
                fields.map((field, index) => {
                    if (!field.seq) return null;
                    const selectClass = onSelect ? `selectable ${selectedSeq === field.seq ? "selected" : ""}` : "";
                    return (
                        <div
                            className={`content-list ${selectClass}`}
                            key={field.id}
                            onClick={() => editIndex === null && onSelect?.(field.seq!)}
                        >
                            {editIndex === index ? (
                                <ItemEditRow
                                    index={index}
                                    control={control}
                                    register={register}
                                    rule={rule}
                                    icon={iconUrl(field.icon, version)}
                                    submitLabel="확인"
                                    isSaving={isSaving}
                                    onSave={handleSave}
                                    onCancel={handleCancel}
                                />
                            ) : (
                                <>
                                    <div className="icon-area">
                                        <img src={iconUrl(field.icon, version)} alt={`${rule.label}아이콘`} />
                                    </div>
                                    <span>
                                        {field.name} ({field.code})
                                    </span>
                                    <section className="modify-btn-area">
                                        <div
                                            className={`edit ${editIndex !== null ? "disabled" : ""}`}
                                            onClick={() => handleEdit(index)}
                                        >
                                            <FiEdit className="icon" />
                                            수정
                                        </div>
                                    </section>
                                </>
                            )}
                        </div>
                    );
                })
            )}

            <footer>
                {newIndex !== -1 && editIndex === newIndex ? (
                    <div className="content-list" key={fields[newIndex].id}>
                        <ItemEditRow
                            index={newIndex}
                            control={control}
                            register={register}
                            rule={rule}
                            icon={DEFAULT_ICON}
                            submitLabel="추가"
                            isSaving={isSaving}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    </div>
                ) : (
                    editIndex === null && (
                        <div className="add-industry" onClick={handleAdd}>
                            <CgAdd className="icon" />
                            {rule.label}추가
                        </div>
                    )
                )}
            </footer>
        </>
    );
};

const AdminIndustryManage = () => {
    const { industries, industriesUpdatedAt, insertIndustry, updateIndustry } = useAdminIndustry();
    // 코드는 수정될 수 있으므로 seq 로 선택 상태 유지
    const [selectedSeq, setSelectedSeq] = React.useState<number | null>(null);
    const selectedIndustry = industries?.find((v) => v.seq === selectedSeq);
    const { services, servicesUpdatedAt, insertService, updateService } = useAdminIndustryService(
        selectedIndustry?.code
    );

    const saveIndustry = ({ seq, ...payload }: SavePayload) =>
        seq ? updateIndustry.mutateAsync({ seq, ...payload }) : insertIndustry.mutateAsync(payload);

    const saveService = ({ seq, ...payload }: SavePayload) =>
        seq ? updateService.mutateAsync({ seq, ...payload }) : insertService.mutateAsync(payload);

    return (
        <article className="industry-manage">
            <h3>AMS Admin 업종관리</h3>
            <div className="content-area">
                <section className="content-table">
                    <header>업종</header>
                    <ItemList
                        rule={INDUSTRY_RULE}
                        items={industries}
                        version={industriesUpdatedAt}
                        isSaving={insertIndustry.isPending || updateIndustry.isPending}
                        onSave={saveIndustry}
                        selectedSeq={selectedSeq}
                        onSelect={setSelectedSeq}
                    />
                </section>

                <section className="content content-table">
                    <header>
                        서비스{selectedIndustry && ` - ${selectedIndustry.name} (${selectedIndustry.code})`}
                    </header>
                    {selectedIndustry ? (
                        <ItemList
                            rule={SERVICE_RULE}
                            items={services}
                            version={servicesUpdatedAt}
                            isSaving={insertService.isPending || updateService.isPending}
                            onSave={saveService}
                        />
                    ) : (
                        <div className="content-list">
                            <span className="nodata">업종을 선택해 주세요</span>
                        </div>
                    )}
                </section>
            </div>
        </article>
    );
};

export default AdminIndustryManage;
