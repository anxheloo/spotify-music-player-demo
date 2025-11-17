import React from "react";

import BottomSheet from "@/components/Modals/BottomSheet";
import BottomPlayer from "@/components/Player/BottomPlayer";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="liked-songs" />
      </Stack>
      <BottomSheet isVisible={["songDetails"]} />
      <BottomPlayer />
    </>
  );
};

export default Layout;
