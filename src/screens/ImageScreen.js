import React from "react";
import ImageDetail from "../components/ImageDetail";
import { View, Text, StyleSheet } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/beach.jpg")}
        score="1"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/forest.jpg")}
        score="2"
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/mountain.jpg")}
        score="3"
      />
    </View>
  );
};

const styles = new StyleSheet.create({});

export default ImageScreen;
