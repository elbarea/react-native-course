import React, { useReducer } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "red", amount: -COLOR_INCREMENT });
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "blue", amount: -COLOR_INCREMENT });
        }}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "green", amount: -COLOR_INCREMENT });
        }}
        color="Green"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
