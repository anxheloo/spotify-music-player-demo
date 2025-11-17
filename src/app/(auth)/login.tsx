import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";

import ReusableBtn from "@/components/buttons/ReusableBtn";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import LinearLayout from "@/components/Layout/LinearLayout";

const Index = () => {
  const router = useRouter();
  const authenticate = async () => {
    router.dismissAll();
    router.replace("/(tabs)");
  };

  return (
    <LinearLayout>
      <View style={styles.children1}>
        <Entypo name="spotify" size={100} color="white" />
        <View>
          <Text style={styles.title}>Millions of Songs Free on Spotify!</Text>
        </View>
      </View>
      <View style={styles.children2}>
        <ReusableBtn
          onPress={authenticate}
          text="Sign in with Spotify"
          containerStyles={{ paddingHorizontal: 30 }}
          extraStyles={{ backgroundColor: "green" }}
        />
        <ReusableBtn
          onPress={authenticate}
          text="Continue with phone number"
          icon={<MaterialIcons name="phone-android" size={24} color="white" />}
          containerStyles={{ paddingHorizontal: 30 }}
          extraStyles={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "white",
          }}
        />
        <ReusableBtn
          onPress={authenticate}
          text="Sign in with Google"
          icon={<AntDesign name="google-plus" size={24} color="red" />}
          containerStyles={{ paddingHorizontal: 30 }}
          extraStyles={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "white",
          }}
        />
        <ReusableBtn
          onPress={authenticate}
          text="Sign in with Facebook"
          icon={<Entypo name="facebook" size={24} color="blue" />}
          containerStyles={{ paddingHorizontal: 30 }}
          extraStyles={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "white",
          }}
        />
      </View>
    </LinearLayout>
  );
};

const styles = StyleSheet.create({
  children1: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  children2: {
    flex: 1,
    gap: 20,
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
    maxWidth: 400,
  },
});

export default Index;
