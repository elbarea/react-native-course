import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const ListScreen = (props) => {
  const people = [
    { name: "Friend#1", age: 23 },
    { name: "Friend#2", age: 17 },
    { name: "Friend#3", age: 28 },
    { name: "Friend#4", age: 13 },
    { name: "Friend#5", age: 30 },
    { name: "Friend#6", age: 30 },
    { name: "Friend#7", age: 30 },
    { name: "Friend#8", age: 30 },
    { name: "Friend#9", age: 30 },
  ];
  return (
    <View>
      <Text style={styles.title}>List screen</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={people}
        keyExtractor={(friend) => {
          friend.name;
        }}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
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

export default ListScreen;
