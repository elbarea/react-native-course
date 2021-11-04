import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        value={text}
        onChangeText={(currentText) => setText(currentText)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <Text>{text}</Text>
      {text.length > 5 ? null : (
        <Text>Password must be longer than 5 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
