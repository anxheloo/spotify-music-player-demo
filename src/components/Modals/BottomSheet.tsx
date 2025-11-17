import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { useAppStore } from "@/store/useAppStore";

import Modal from "react-native-modal";

import { handlePlayPause, player } from "@/utils/player";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAudioPlayerStatus } from "expo-audio";
import PlayPauseBtn from "../buttons/PlayPauseBtn";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

type Props = {
  isVisible: string[];
};

const BottomSheet = ({ isVisible }: Props) => {
  const specifiedModal = useAppStore((state) => state.specifiedModal);
  const currentTrack = useAppStore((state) => state.currentTrack);
  const updateModalSlice = useAppStore((state) => state.updateModalSlice);
  const isVisibleBool = isVisible.includes(specifiedModal ?? "");

  const status = useAudioPlayerStatus(player);

  const closeModal = () => {
    updateModalSlice({ specifiedModal: null });
  };

  return (
    <Modal
      style={styles.modalContainer}
      isVisible={isVisibleBool}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={300}
      animationOutTiming={300}
      // Backdrop
      hasBackdrop={true}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      backdropColor={"black"}
      backdropOpacity={0.5}
      //   onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      // onModalHide={closeModal}
      // coverScreen
      // Swipe
      swipeThreshold={450}
      // panResponderThreshold
      // scrollOffset
      // scrollOffsetMax={200}
      onSwipeComplete={closeModal}
      onSwipeCancel={() => {}}
      swipeDirection={["up", "down"]}
      propagateSwipe={true}
      hideModalContentWhileAnimating={true}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#5072A7",
        }}
      >
        <Text style={{ color: "white" }}> {status.currentTime}</Text>
        <Text style={{ color: "white" }}>{status.duration}</Text>

        <Text>Slider</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <MaterialIcons name="skip-previous" size={30} color="white" />
          <PlayPauseBtn
            onPress={() => handlePlayPause(currentTrack!)}
            currentSongId={currentTrack?.id}
          />
          <MaterialIcons name="skip-next" size={30} color="white" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    // marginTop: 0.2 * SCREEN_HEIGHT,
  },
});

export default BottomSheet;
