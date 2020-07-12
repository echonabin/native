import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title='Components'
        onPress={() => navigation.navigate("Components")}
      />
      <Button title='Lists' onPress={() => navigation.navigate("Lists")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
