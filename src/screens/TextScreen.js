import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={style.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  inputStyle: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
