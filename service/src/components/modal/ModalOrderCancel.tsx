import LoadingIndicator from "@components/LoadingIndicator";
import { useOrder } from "@hooks/useOrder";
import { useModalStore } from "@store/modalStore";
import React from "react";

interface AlertModalProps {
    orderSeq: number;
    title: string;
}

const ModalOrderCancel: React.FC<AlertModalProps> = ({ orderSeq, title }) => {
    const [confirmCheck, setConfirmCheck] = React.useState<boolean>(false);
    const [cancelReason, setCancelReason] = React.useState<string>("");
    const closeModal = useModalStore((state) => state.closeModal);
    const { userOrderCancelReq, userOrderLoading } = useOrder();
    const handleConfirm = async () => {
        if (!confirmCheck) {
            alert("담당업체와 협의된 사항인지 확인해 주세요.");
            return;
        }

        if (cancelReason.trim() === "") {
            alert("취소 사유를 작성해주세요.");
            return;
        }

        const sendData = { seq: orderSeq, cancelReason };
        try {
            await userOrderCancelReq.mutateAsync(sendData);
        } catch (err) {
            alert(err);
        } finally {
            closeModal();
        }
    };

    return (
        <div className="order-cancel-modal">
            {userOrderLoading && (
                <div className="common-loading">
                    <LoadingIndicator size={80} />
                </div>
            )}
            <div className="order-cancel-modal__header">
                <div className="title">
                    주문취소 사유 작성 <span>[ {title} ]</span>
                </div>

                <button type="button" className="modal-close-x" onClick={closeModal} aria-label="닫기">
                    ×
                </button>
            </div>

            <div className="order-cancel-modal__body">
                <label>
                    <input
                        type="checkbox"
                        checked={confirmCheck}
                        onChange={(e) => {
                            setConfirmCheck(e.target.checked);
                        }}
                    />
                    담당 업체와 사전 논의 된 사항입니다.
                </label>
                <textarea
                    value={cancelReason}
                    onChange={(e) => {
                        setCancelReason(e.target.value);
                    }}
                    placeholder="취소사유 작성"
                />
            </div>

            <div className="order-cancel-modal__footer">
                <button type="button" onClick={handleConfirm}>
                    제출
                </button>
                <button className="cancel" type="button" onClick={closeModal}>
                    cancel
                </button>
            </div>
        </div>
    );
};

export default ModalOrderCancel;
