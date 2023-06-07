import React from "react"
import { View, Text, Button } from "react-native";
import Container from "../../components/container/container";

export default function ListOrder({ navigation }) {
  const onPressDetail = () => {
    navigation.navigate('DetailOrder', {
      order: {
        id: "#123"
      }
    })
  }
  return (
    <Container>
      <View>
        <Text>List Order</Text>
        <Button title="Detail" onPress={onPressDetail} />
      </View>
    </Container>
  )
}