import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../components/container/container";
import SvgQRCode from "react-native-qrcode-svg";

export default function HomeScreen() {
  return (
    <View style={styles.mainView}>
      <SvgQRCode value="finish_order" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 50,
    paddingRight: 25,
    paddingBottom: 20,
    paddingLeft: 25,
    backgroundColor: "white",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
