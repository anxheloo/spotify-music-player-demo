import React from "react";
import { ColorValue, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: React.ReactNode;
  colors?: [ColorValue, ColorValue, ...ColorValue[]];
};

const LinearLayout = ({
  children,
  colors = ["rgba(0,0,0)", "rgba(8, 14, 44)", "rgba(8, 14, 44)"],
}: Props) => {
  return (
    <LinearGradient colors={colors} style={styles.container}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LinearLayout;
