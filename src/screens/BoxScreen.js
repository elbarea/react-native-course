import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwo} />
      <View style={styles.viewThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: 200,
  },
  viewOne: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  viewTwo: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    //top: 100,
    alignSelf: "flex-end",
  },
  viewThree: {
    backgroundColor: "purple",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
