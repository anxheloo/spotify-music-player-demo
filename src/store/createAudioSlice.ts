import { Song } from "@/types/appTypes";
import { StateCreator } from "zustand";

export interface AudioSlice {
  currentTrack: Song | null;
  updateAudioSlice: (data: Partial<AudioSlice>) => void;
}

export const createAudioSlice: StateCreator<AudioSlice> = (set) => ({
  currentTrack: null,
  updateAudioSlice: set,
});
