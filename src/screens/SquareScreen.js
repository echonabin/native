import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 25)}
        onDecrease={() => setRed(red - 25)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 25)}
        onDecrease={() => setGreen(green - 25)}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 25)}
        onDecrease={() => setBlue(blue - 25)}
        color='Blue'
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({});

export default SquareScreen;
