import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Hi There!!</Text>
      <Button
        title='Components'
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Lists")}>
        <Text>Lists</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
