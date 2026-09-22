import { create } from "zustand";
import type { ReactNode } from "react";

interface ModalOptions {
    maxWidth?: number | string;
    content: ReactNode;
    closeOnBackdrop?: () => boolean;
}

interface ModalStore {
    isOpen: boolean;
    options: ModalOptions | null;
    openModal: (options: ModalOptions) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    options: null,
    openModal: (options: ModalOptions) => set({ isOpen: true, options }),
    closeModal: () => set({ isOpen: false, options: null }),
}))