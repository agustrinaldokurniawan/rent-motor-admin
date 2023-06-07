import React from "react";
import { View, Text } from "react-native";
import Container from "../../components/container/container";

export default function DetailMotor({ route }) {
  const { motor } = route.params

  return (
    <Container>
      <View>
        <Text>Motor: {motor.name}</Text>
      </View>
    </Container>
  )
}