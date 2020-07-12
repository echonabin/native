import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title='Add Color!'
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRGB(),
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRGB(),
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRGB(),
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRGB(),
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRGB(),
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};
const style = StyleSheet.create({});

export default ColorScreen;
