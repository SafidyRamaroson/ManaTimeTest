import { create } from "zustand";

interface ModalState {
    isAbsenceModalOpen: boolean;
}

interface ModalStateAction {
    toggleAbsenceModal: () => void;
}

export const useModalStore = create<ModalState & ModalStateAction>((set) => ({
    isAbsenceModalOpen: false,
    toggleAbsenceModal: () => set((state) => ({
        isAbsenceModalOpen: !state.isAbsenceModalOpen,
    })),
}));
