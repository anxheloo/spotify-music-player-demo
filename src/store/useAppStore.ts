import { create } from "zustand";
import { AudioSlice, createAudioSlice } from "./createAudioSlice";
import { ModalSlice, createModalSlice } from "./createModalSlice";

export type AppState = AudioSlice & ModalSlice;

export const useAppStore = create<AppState>()((...args) => ({
  ...createAudioSlice(...args),
  ...createModalSlice(...args),
}));
