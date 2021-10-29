import React from "react";
import ImageDetail from "../components/ImageDetail";
import { View, Text, StyleSheet } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/beach.jpg")}
        score={2}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/forest.jpg")}
        score={7}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/mountain.jpg")}
        score={5}
      />
    </View>
  );
};

const styles = new StyleSheet.create({});

export default ImageScreen;
