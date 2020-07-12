import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const ButtonScreen = () => {
  return (
    <View>
      <Button
        title='click me!'
        onClick={() => Alert.alert("Button pressed!!")}
      />
      <Text>Hello from button page!!</Text>
      <Text style={style.textStyle}>Text with design!!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default ButtonScreen;
