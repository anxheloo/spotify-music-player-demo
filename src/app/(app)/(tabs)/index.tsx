import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import LinearLayout from "@/components/Layout/LinearLayout";

import ReusableImage from "@/components/Images/ReusableImage";

import Song from "@/components/Elements/Song";
import { Song as SongType } from "@/types/appTypes";

import { songs } from "@/data";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

const Index = () => {
  const greeting =
    new Date().getHours() < 12
      ? "Good Morning"
      : new Date().getHours() < 16
      ? "Good Day"
      : "Good Afternoon";

  const renderItem = ({ item }: { item: SongType }) => <Song data={item} />;

  return (
    <LinearLayout>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          nestedScrollEnabled={true}
          bounces={false}
        >
          <View style={styles.headerContainer}>
            <ReusableImage />
            <Text style={styles.greetingText}>{greeting}</Text>
            <Entypo name="flash" size={24} color="white" />
          </View>

          <View style={styles.btnsContainer}>
            <Pressable style={styles.pressable}>
              <Text style={styles.btnText}>Music</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Text style={styles.btnText}>Podcasts & Shows</Text>
            </Pressable>
          </View>

          <View style={styles.songsContainer}>
            <View style={styles.hardcodedSongs}>
              <Link href="/liked-songs" asChild>
                <Song data={{ title: "Liked Songs" }} />
              </Link>
              <Song data={{ title: "Hip Hop" }} />
            </View>
            <FlatList
              scrollEnabled={false}
              contentContainerStyle={{ gap: 15 }}
              numColumns={2}
              columnWrapperStyle={{ gap: 15 }}
              data={songs.slice(0, 4)}
              renderItem={renderItem}
              keyExtractor={(item: SongType) => item.id.toString()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearLayout>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 10,
    gap: 10,
    flexGrow: 1,
    paddingBottom: 50,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 20,
  },

  btnsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  pressable: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#282828",
  },

  btnText: {
    color: "white",
    fontSize: 15,
  },

  greetingText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },

  songsContainer: {
    paddingVertical: 10,
    gap: 15,
  },

  hardcodedSongs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
});

export default Index;
