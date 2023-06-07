import React from "react"
import { View, Text, Button } from "react-native";

export default function ListMotor({ navigation }) {
  const onPressDetail = () => {
    navigation.navigate('DetailMotor', {
      motor: {
        name: "Kawasaki Super"
      }
    })
  }
  return (
    <View>
      <Text>List Motor</Text>
      <Button title="Detail" onPress={onPressDetail} />
    </View>
  )
}