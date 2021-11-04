import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 7,
    borderColor: "green",
    height: "100%",
    //justifyContent: "center",
    //justifyContent: "space-between",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
