import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOne}>Child #1</Text>
      <Text style={styles.textTwo}>Child #2</Text>
      <Text style={styles.textThree}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 7,
    borderColor: "green",
    height: 200,
  },
  textOne: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwo: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject
  },
  textThree: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
