import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUserStore } from "../../store/publicState";

interface FormData {
    fee1: string;
    fee2: string;
}

const AdminDefaultFeeRate: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useUserStore();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            fee1: "20",
            fee2: "5"
        }
    });

    const onSubmit = async (data: FormData) => {
        if (!user) return;

        const result = confirm(
            `수수료 1 : ${data.fee1}%   수수료 2 : ${data.fee2}%\n\n기본 수수료를 다음과 같이 변경 합니다.`
        );

        if (result) {
            // 실제 서버 통신 로직 추가 필요
            console.log("수수료 변경 요청:", data);
            alert("수수료 변경 요청이 처리되었습니다.");
            navigate("/admin/home");
        }
    };

    return (
        <div className="admin-content">
            <h2 className="page-title">기본 수수료 변경</h2>

            <div className="page-description">
                <p>서비스 이용에 적용되는 기본 수수료를 설정합니다.</p>
                <p className="text-danger mt-2">
                    💡 이 설정은 모든 서비스에 공통으로 적용됩니다. 개별 서비스 수수료 설정은 별도로 관리됩니다.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form-card">
                <div className="form-group">
                    <label className="form-label">
                        수수료1 설정
                        <span className="badge badge-info">기본값: 20%</span>
                    </label>
                    <div className="input-group">
                        <input
                            type="number"
                            {...register("fee1", {
                                required: "수수료1은 필수입니다.",
                                min: { value: 0, message: "수수료는 0% 이상이어야 합니다." },
                                max: { value: 100, message: "수수료는 100% 이하이어야 합니다." }
                            })}
                            className="form-input"
                            placeholder="수수료 입력"
                        />
                        <span className="input-addon">%</span>
                    </div>
                    {errors.fee1 && <p className="error-message">{errors.fee1.message}</p>}
                </div>

                <div className="form-group">
                    <label className="form-label">
                        수수료2 설정
                        <span className="badge badge-info">기본값: 5%</span>
                    </label>
                    <div className="input-group">
                        <input
                            type="number"
                            {...register("fee2", {
                                required: "수수료2는 필수입니다.",
                                min: { value: 0, message: "수수료는 0% 이상이어야 합니다." },
                                max: { value: 100, message: "수수료는 100% 이하이어야 합니다." }
                            })}
                            className="form-input"
                            placeholder="수수료 입력"
                        />
                        <span className="input-addon">%</span>
                    </div>
                    {errors.fee2 && <p className="error-message">{errors.fee2.message}</p>}
                </div>

                <div className="form-actions">
                    <button type="button" onClick={() => navigate("/admin/home")} className="btn btn-outline">
                        취소
                    </button>
                    <button type="submit" className="btn btn-primary">
                        수수료 변경
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminDefaultFeeRate;
