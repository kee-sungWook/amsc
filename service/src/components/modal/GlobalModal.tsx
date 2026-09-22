import "@scss/pages/_modal.scss";
import React from "react";
import { useModalStore } from "@store/modalStore";
import { createPortal } from "react-dom";

const GlobalModal: React.FC = () => {
    const isOpen = useModalStore((state) => state.isOpen);
    const options = useModalStore((state) => state.options);
    const closeModal = useModalStore((state) => state.closeModal);

    // ESC 키로 닫기
    React.useEffect(() => {
        if (!isOpen) return;
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleKeydown);
        // 모달이 열려 있을 때 body 스크롤 방지
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, closeModal]);

    if (!isOpen || !options) return null;

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget && options.closeOnBackdrop?.() === false) {
            closeModal();
        }
    };

    return createPortal(
        <div className="global-modal" role="presentation" onMouseDown={handleBackdropClick}>
            <div
                className="global-modal__content"
                role="dialog"
                aria-modal="true"
                style={{
                    width: options.maxWidth ?? 500
                }}
                onMouseDown={(event) => {
                    event.stopPropagation();
                }}
            >
                {options.content}
            </div>
        </div>,
        document.body
    );
};

export default GlobalModal;
