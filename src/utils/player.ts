import { Song } from "@/types/appTypes";

import { useAppStore } from "@/store/useAppStore";
import { createAudioPlayer, setAudioModeAsync } from "expo-audio";

export const player = createAudioPlayer(null);
setAudioModeAsync({
  playsInSilentMode: true,
  shouldPlayInBackground: true,
  interruptionModeAndroid: "duckOthers",
  interruptionMode: "mixWithOthers",
});

export const handlePlayPause = (track: Song) => {
  if (track.id === useAppStore.getState().currentTrack?.id) {
    if (player.currentStatus.playing) {
      player.pause();
    } else {
      player.play();
    }

    return;
  }

  useAppStore.getState().updateAudioSlice({ currentTrack: track });

  player.replace(track.url);
  player.seekTo(0);
  player.play();
};

export const stopAudioOnUnmount = () => {
  player.release();
};
