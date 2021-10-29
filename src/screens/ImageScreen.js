import React from "react";
import ImageDetail from "../components/ImageDetail";
import { View, Text, StyleSheet } from "react-native";

const ImageScreen = () => {
  return <View>
      <ImageDetail title="Forest" imageSource={require("../../assets/beach.jpg")}/>
      <ImageDetail title="Mountain" imageSource={require("../../assets/forest.jpg")}/>
      <ImageDetail title="Beach" imageSource={require("../../assets/mountain.jpg")}/>
  </View>;
};

const styles = new StyleSheet.create({});

export default ImageScreen;
