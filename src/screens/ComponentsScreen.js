import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ComponentsScreen = () => {
  const name = "Nabin";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native !!</Text>
      <Text>I am {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
