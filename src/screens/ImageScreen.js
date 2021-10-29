import React from "react";
import ImageDetail from "../components/ImageDetail";
import { View, Text, StyleSheet } from "react-native";

const ImageScreen = () => {
  return <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Mountain" />
      <ImageDetail title="Beach" />
  </View>;
};

const styles = new StyleSheet.create({});

export default ImageScreen;
