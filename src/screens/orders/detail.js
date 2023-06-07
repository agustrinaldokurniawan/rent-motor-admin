import React from "react";
import { View, Text } from "react-native";
import Container from "../../components/container/container";

export default function DetailOrder({ route }) {
  const { order } = route.params
  return (
    <Container>
      <View>
        <Text>Order: {order.id}</Text>
      </View>
    </Container>
  )
}