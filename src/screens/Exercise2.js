import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const Exercise2 = (props) => {
  const people = [
    { name: "Friend#1", age: 23 },
    { name: "Friend#2", age: 17 },
    { name: "Friend#3", age: 28 },
    { name: "Friend#4", age: 13 },
    { name: "Friend#5", age: 30 },
    { name: "Friend#6", age: 36 },
    { name: "Friend#7", age: 37 },
    { name: "Friend#8", age: 80 },
    { name: "Friend#9", age: 33 },
  ];
  return (
    <View>
      <Text style={styles.title}>List screen</Text>
      <FlatList
        data={people}
        keyExtractor={(friend) => {
          friend.name;
        }}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  textStyle: {
    marginVertical: 50,
  },
});

export default Exercise2;
