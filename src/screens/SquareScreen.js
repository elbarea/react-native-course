import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setRed((prevState) => prevState + 1);
        }}
        onDecrease={() => {
          setRed((prevState) => prevState + 1);
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          setBlue((prevState) => prevState + 1);
        }}
        onDecrease={() => {
          setBlue((prevState) => prevState + 1);
        }}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => {
          setGreen((prevState) => prevState + 1);
        }}
        onDecrease={() => {
          setGreen((prevState) => prevState + 1);
        }}
        color="Green"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
