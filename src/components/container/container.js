import React from "react";
import { View } from "react-native";
import { style } from "./styles";

export default function Container({ children }) {
  return (
    <View style={style.container}>
      {children}
    </View>
  )
}