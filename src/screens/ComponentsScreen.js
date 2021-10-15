import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = (props) => {
  return <Text style={styles.textStyle}>this is the components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
