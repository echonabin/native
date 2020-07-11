import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ButtonScreen = () => {
  return (
    <View>
      <Text>Hello from button page!!</Text>
      <Text>This shouldn't be added to git hub!!</Text>
      <Text style={style.buttonStyle}>Text with design!!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  buttonStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default ButtonScreen;
