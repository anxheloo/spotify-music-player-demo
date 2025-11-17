import { TextStyle, ViewStyle } from "react-native";

type TabBarProps = {
  tabBarStyle: ViewStyle;
  activeTintColor: string;
  inactiveTintColor: string;
  tabBarLabelStyle: TextStyle;
  tabBarItemStyle: ViewStyle;
  tabBarIconStyle: TextStyle;
};

export const TabBar: TabBarProps = {
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    borderTopWidth: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    elevation: 4,
    shadowOpacity: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },

  activeTintColor: "#fff",
  inactiveTintColor: "#fff",
  tabBarLabelStyle: {
    color: "#fff",
    paddingTop: 5,
  },

  tabBarItemStyle: {
    height: "100%",
    paddingTop: 5,
  },

  tabBarIconStyle: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: "auto",
    // marginBottom: "auto",
  },
};
