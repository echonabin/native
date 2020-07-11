import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const list = [
    { name: "nabin", age: "29" },
    { name: "random", age: "15" },
    { name: "World", age: "14" },
    { name: "Hello", age: "20" },
    { name: "vicky age - 19" },
    { name: "guy", age: "40" },
    { name: "vicky chutiya" },
    { name: "samir noob"},
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(list) => list.name}
        data={list}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ListScreen;
