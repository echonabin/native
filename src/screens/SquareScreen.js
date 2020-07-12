import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const COLOR_INCRIEMENT = 25;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCRIEMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCRIEMENT)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCRIEMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCRIEMENT)}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCRIEMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCRIEMENT)}
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
