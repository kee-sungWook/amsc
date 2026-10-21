import "@scss/pages/_adminIndustryManage.scss";
import { CgAdd } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import React from "react";
import { Controller, useFieldArray, useForm, type Control, type UseFormRegister } from "react-hook-form";
import type { IndustryModel } from "@interface/models";
import { useAdminIndustry } from "@hooks/useAdminIndustry";
import LoadingIndicator from "@components/LoadingIndicator";

const DEFAULT_ICON = "/icons/ic_192.png";

interface IndustryFormItem {
    seq?: number;
    name: string;
    code: string;
    icon: string | null;
    iconFile: File | null;
}

interface FormValues {
    industries: IndustryFormItem[];
}

const toFormItems = (industries: IndustryModel[] = []): IndustryFormItem[] =>
    industries.map((v) => ({ ...v, iconFile: null }));

// 아이콘은 같은 파일명으로 덮어쓰므로 조회시점(version)으로 캐시 무효화
const iconUrl = (icon: string | null, version?: number) =>
    icon ? `${icon}?v=${version ?? 0}` : DEFAULT_ICON;

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
    icon: string;
    submitLabel: string;
    isSaving: boolean;
    onSave: (index: number) => void;
    onCancel: () => void;
}

const IndustryEditRow = ({ index, control, register, icon, submitLabel, isSaving, onSave, onCancel }: EditRowProps) => (
    <>
        <Controller
            control={control}
            name={`industries.${index}.iconFile`}
            render={({ field }) => <IconPicker icon={icon} file={field.value} onChange={field.onChange} />}
        />
        <section className="content-input-area">
            <input
                type="text"
                placeholder="업종명 입력"
                maxLength={30}
                {...register(`industries.${index}.name`, {
                    validate: (v) => !!v.trim() || "업종명을 입력해 주세요"
                })}
            />
            <Controller
                control={control}
                name={`industries.${index}.code`}
                rules={{
                    required: "업종코드를 입력해 주세요",
                    pattern: { value: /^[A-Z]{2}$/, message: "업종코드는 영어 대문자 2자리로 입력해 주세요" }
                }}
                render={({ field }) => (
                    <input
                        {...field}
                        type="text"
                        placeholder="업종코드 (영문 대문자 2자리)"
                        maxLength={2}
                        onChange={(e) => field.onChange(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))}
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

const AdminIndustryManage = () => {
    const { industries, industriesUpdatedAt, insertIndustry, updateIndustry } = useAdminIndustry();
    const [editIndex, setEditIndex] = React.useState<number | null>(null);

    const { control, register, reset, trigger, getValues, getFieldState } = useForm<FormValues>({
        defaultValues: { industries: [] }
    });

    const { fields, append } = useFieldArray({ control, name: "industries" });

    // 서버 데이터 변경 시 폼 동기화
    React.useEffect(() => {
        reset({ industries: toFormItems(industries) });
        setEditIndex(null);
    }, [industries, reset]);

    const newIndex = fields.findIndex((field) => !field.seq);
    const isSaving = insertIndustry.isPending || updateIndustry.isPending;

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
        reset({ industries: toFormItems(industries) });
        setEditIndex(null);
    };

    const handleSave = async (index: number) => {
        const valid = await trigger([`industries.${index}.name`, `industries.${index}.code`]);
        if (!valid) {
            const error =
                getFieldState(`industries.${index}.name`).error ?? getFieldState(`industries.${index}.code`).error;
            alert(error?.message ?? "입력값을 확인해 주세요");
            return;
        }

        const { seq, name, code, iconFile } = getValues(`industries.${index}`);
        const payload = {
            name: name.trim(),
            code: code.trim().toUpperCase(),
            iconFile
        };
        try {
            if (seq) await updateIndustry.mutateAsync({ seq, ...payload });
            else await insertIndustry.mutateAsync(payload);
        } catch (err) {
            alert((err as { message?: string })?.message ?? "업종 저장에 실패했습니다.");
        }
    };

    return (
        <article className="industry-manage">
            <h3>AMS Admin 업종관리</h3>
            <div className="content-area">
                <section className="content-table">
                    <header>업종</header>
                    {industries === undefined ? (
                        <LoadingIndicator size={40} />
                    ) : fields.length === 0 || (fields.length === 1 && newIndex === 0) ? (
                        <div className="content-list">
                            <span className="nodata">등록된 데이터가 없습니다</span>
                        </div>
                    ) : (
                        fields.map((field, index) => {
                            if (!field.seq) return null;
                            return (
                                <div className="content-list" key={field.id}>
                                    {editIndex === index ? (
                                        <IndustryEditRow
                                            index={index}
                                            control={control}
                                            register={register}
                                            icon={iconUrl(field.icon, industriesUpdatedAt)}
                                            submitLabel="확인"
                                            isSaving={isSaving}
                                            onSave={handleSave}
                                            onCancel={handleCancel}
                                        />
                                    ) : (
                                        <>
                                            <div className="icon-area">
                                                <img src={iconUrl(field.icon, industriesUpdatedAt)} alt="업종아이콘" />
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
                                <IndustryEditRow
                                    index={newIndex}
                                    control={control}
                                    register={register}
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
                                    업종추가
                                </div>
                            )
                        )}
                    </footer>
                </section>

                <section className="content content-table">
                    <header>서비스</header>
                    <div className="content-list">
                        <span className="nodata">등록된 데이터가 없습니다</span>
                    </div>
                    <footer>
                        <button>추가</button>
                    </footer>
                </section>
            </div>
        </article>
    );
};

export default AdminIndustryManage;
