import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

import { player } from "@/utils/player";

import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useAppStore } from "@/store/useAppStore";
import { useAudioPlayerStatus } from "expo-audio";

type Props = {
  onPress: () => void;
  width?: number;
  height?: number;
  currentSongId?: string | number;
};

const PlayPauseBtn = ({ onPress, width, height, currentSongId }: Props) => {
  const currentTrack = useAppStore((state) => state.currentTrack);
  const status = useAudioPlayerStatus(player);

  const isActive = currentTrack && currentTrack.id === currentSongId;

  return (
    <TouchableOpacity
      style={{
        width: width ?? 60,
        height: height ?? 60,
        backgroundColor: "green",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {isActive && (!status.isLoaded || status.isBuffering) ? (
        <ActivityIndicator size={"small"} color={"black"} />
      ) : isActive && status.playing ? (
        <MaterialIcons name="pause-circle-outline" size={24} color="white" />
      ) : (
        <Foundation name="play" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default PlayPauseBtn;
