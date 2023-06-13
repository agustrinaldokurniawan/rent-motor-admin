import React from "react";
import { View } from "react-native";
import { style } from "./styles";
import LoadingFullLottie from "../lottie/loadingFull";

export default function Container({ children, loading }) {
  return (
    <View style={style.container}>
      {loading ? <LoadingFullLottie /> : ''}
      {children}
    </View>
  )
}