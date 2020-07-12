import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSource={require("../../assets/forest.jpg")}
        rating='*****'
      />
      <ImageDetail
        title='Mountain'
        imageSource={require("../../assets/mountain.jpg")}
        rating='***'
      />
      <ImageDetail
        title='Beach'
        imageSource={require("../../assets/beach.jpg")}
        rating='**'
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ImageScreen;
