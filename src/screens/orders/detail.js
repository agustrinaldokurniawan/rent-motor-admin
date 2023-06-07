import React from "react";
import { View, Text } from "react-native";

export default function DetailOrder({ route }) {
  const { order } = route.params
  return (
    <View>
      <Text>Order: {order.id}</Text>
    </View>
  )
}