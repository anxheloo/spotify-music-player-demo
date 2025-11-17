import React from "react";

import { Image, ImageStyle } from "expo-image";

import { blurhash, unknowntrackImageUrl } from "@/constants/images";

type Props = {
  image?: string;
  extraStyles?: ImageStyle;
};

const ReusableImage = ({
  image,
  extraStyles = {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
  },
}: Props) => {
  return (
    <Image
      style={extraStyles}
      source={{
        uri: image ?? unknowntrackImageUrl,
      }}
      placeholder={{ blurhash: blurhash }}
      contentFit="cover"
      transition={1000}
    />
  );
};

export default ReusableImage;
