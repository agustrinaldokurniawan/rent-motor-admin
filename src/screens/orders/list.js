import React from "react"
import { View, Text, Button } from "react-native";

export default function ListOrder({ navigation }) {
  const onPressDetail = () => {
    navigation.navigate('DetailOrder', {
      order: {
        id: "#123"
      }
    })
  }
  return (
    <View>
      <Text>List Order</Text>
      <Button title="Detail" onPress={onPressDetail} />
    </View>
  )
}