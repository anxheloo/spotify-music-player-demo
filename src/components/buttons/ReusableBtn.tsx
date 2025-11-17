import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  onPress: () => void;
  text: string;
  icon?: React.ReactNode;
  containerStyles?: ViewStyle;
  extraStyles?: ViewStyle;
};

const ReusableBtn = ({
  text,
  icon,
  extraStyles,
  containerStyles,
  onPress,
}: Props) => {
  return (
    <View style={containerStyles}>
      <TouchableOpacity
        style={[styles.btnContainer, extraStyles]}
        onPress={onPress}
      >
        {icon}
        <Text style={styles.textStyles}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textStyles: {
    color: "white",
    flex: 1,
    textAlign: "center",
  },
});

export default ReusableBtn;
