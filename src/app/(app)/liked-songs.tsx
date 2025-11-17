import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Song from "@/components/Elements/Song";
import LinearLayout from "@/components/Layout/LinearLayout";

import { songs } from "@/data";
import { Song as SongType } from "@/types/appTypes";

import { handlePlayPause } from "@/utils/player";
import { useRouter } from "expo-router";

import PlayPauseBtn from "@/components/buttons/PlayPauseBtn";
import Ionicons from "@expo/vector-icons/Ionicons";

const LikedSongs = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: SongType }) => (
    <Song data={item} showPlayIcon={true} />
  );

  return (
    <LinearLayout colors={["#614385", "#516395"]}>
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <View>
              <View style={styles.headerContainer}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color="white"
                  onPress={router.back}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Liked Songs
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "grey" }}>
                    {songs.length} Songs
                  </Text>
                </View>
                <PlayPauseBtn
                  onPress={() => handlePlayPause(songs[0])}
                  currentSongId={songs[0].id}
                />
              </View>
            </View>
          }
          // stickyHeaderIndices={[0]}
          contentContainerStyle={styles.flatListContainer}
          bounces={false}
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </LinearLayout>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    gap: 10,
    paddingBottom: 100,
  },

  headerContainer: {
    height: 50,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#614385",
  },
});

export default LikedSongs;
