import React from "react";

import { TabBar } from "@/theme";
import { Tabs } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: TabBar.activeTintColor,
        tabBarInactiveTintColor: TabBar.inactiveTintColor,
        tabBarStyle: { ...TabBar.tabBarStyle },
        tabBarItemStyle: { ...TabBar.tabBarItemStyle },
        tabBarIconStyle: { ...TabBar.tabBarIconStyle },
        // tabBarBackground: () => (
        //   <BlurView
        //     intensity={40}
        //     style={{
        //       ...StyleSheet.absoluteFillObject,
        //     }}
        //   />
        // ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarLabelStyle: TabBar.tabBarLabelStyle,
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Entypo name="home" size={25} color={color} />
            ) : (
              <AntDesign name="home" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarLabelStyle: TabBar.tabBarLabelStyle,
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name="person" size={24} color={color} />
            ) : (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
