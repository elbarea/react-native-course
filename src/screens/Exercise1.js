import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Exercise1 = (props) => {
  const name = "Rafael";

  return (
    <View>
      <Text style={styles.font45}>Getting started with react native</Text>
      <Text style={styles.font20}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  font45: {
    fontSize: 45,
  },
  font20: {
    fontSize: 20,
  },
});
export default Exercise1;
