import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors((prevState) => [...prevState, randomRgb()]);
        }}
      />
      <View style={{flex: 1, flexDirection: 'row', flexWrap: "wrap"}}>
      {colors.map((c, id) => <View key={id} style={{ height: 100, width: 100, backgroundColor: c }} />)}
      </View>
      
    </View>
  );
};

const randomRgb = () => {
  const red = Math.random() * 256;
  const green = Math.random() * 256;
  const blue = Math.random() * 256;

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
