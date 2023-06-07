import React from "react";
import { View, Text } from "react-native";

export default function DetailMotor({ route }) {
  const { motor } = route.params

  return (
    <View>
      <Text>Motor: {motor.name}</Text>
    </View>
  )
}