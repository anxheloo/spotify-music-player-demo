import { StateCreator } from "zustand";

export interface ModalSlice {
  specifiedModal: "songDetails" | null;
  updateModalSlice: (data: Partial<ModalSlice>) => void;
}

export const createModalSlice: StateCreator<ModalSlice> = (set) => ({
  specifiedModal: null,
  updateModalSlice: set,
});
