import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to list demo"
      />
      <Button
        onPress={() => navigation.navigate("ImageSC")}
        title="Go to Imagescreen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
