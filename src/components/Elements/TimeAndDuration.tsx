import { useAppStore } from "@/store/useAppStore";
import { player } from "@/utils/player";
import { useAudioPlayerStatus } from "expo-audio";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  currentSongId: string | number;
};

const TimeAndDuration = ({ currentSongId }: Props) => {
  const currentTrack = useAppStore((state) => state.currentTrack);
  const status = useAudioPlayerStatus(player);

  const isActive = currentTrack && currentTrack.id === currentSongId;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Text style={{ color: "white" }}>
        {isActive ? status.currentTime : "0:00"}
      </Text>
      <Text style={{ color: "white" }}>
        {isActive ? status.duration : "00:00"}
      </Text>
    </View>
  );
};

export default TimeAndDuration;
