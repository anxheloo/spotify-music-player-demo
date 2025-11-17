import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Animated, { FadeOut, SlideInDown } from "react-native-reanimated";

import { useAppStore } from "@/store/useAppStore";

import { handlePlayPause } from "@/utils/player";
import PlayPauseBtn from "../buttons/PlayPauseBtn";

const BottomPlayer = () => {
  const currentTrack = useAppStore((state) => state.currentTrack);
  const updateModalSlice = useAppStore((state) => state.updateModalSlice);

  if (!currentTrack) {
    return null;
  }

  return (
    <Animated.View entering={SlideInDown} exiting={FadeOut}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => updateModalSlice({ specifiedModal: "songDetails" })}
      >
        <View style={styles.children}>
          <Text style={styles.titleText}>{currentTrack?.title}</Text>
          <PlayPauseBtn
            onPress={() => handlePlayPause(currentTrack!)}
            currentSongId={currentTrack.id}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  children: {
    width: "90%",
    height: 60,
    backgroundColor: "green",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  titleText: {
    color: "white",
  },
});

export default BottomPlayer;
