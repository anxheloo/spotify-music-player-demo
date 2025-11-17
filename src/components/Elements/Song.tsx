import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Song as SongType } from "@/types/appTypes";
import { handlePlayPause } from "@/utils/player";
import ReusableImage from "../Images/ReusableImage";
import PlayPauseBtn from "../buttons/PlayPauseBtn";
import TimeAndDuration from "./TimeAndDuration";

type Props = {
  data: Partial<SongType>;
  onPress?: () => void;
  showPlayIcon?: boolean;
  handlePlay?: () => void;
};

const Song = ({ data, onPress, showPlayIcon, handlePlay }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ReusableImage extraStyles={{ width: 60, height: 60 }} />
      <Text numberOfLines={1} style={styles.text}>
        {data.title}
      </Text>

      {data.id && <TimeAndDuration currentSongId={data.id} />}

      {showPlayIcon && (
        <PlayPauseBtn
          currentSongId={data.id}
          onPress={() => handlePlayPause(data as SongType)}
          width={40}
          height={40}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "#282828",
  },

  text: {
    color: "white",
    fontWeight: "400",
    flex: 1,
  },
});

export default Song;
