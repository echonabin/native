import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [Pass, setPass] = useState("");
  return (
    <View>
      <Text>Input Name</Text>
      <TextInput
        style={style.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Input Password</Text>
      <TextInput
        style={style.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        onChangePass={(newPass) => setPass(newPass)}
        value={Pass}
      />
      {Pass < 5 ? (
        <Text>Password must be greater than 5 letter</Text>
      ) : (
        <Text>{Pass}</Text>
      )}
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
