import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const COLOR_INCRIEMENT = 25;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCRIEMENT)}
        onDecrease={() => setRed(red - COLOR_INCRIEMENT)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCRIEMENT)}
        onDecrease={() => setGreen(green - COLOR_INCRIEMENT)}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCRIEMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCRIEMENT)}
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
