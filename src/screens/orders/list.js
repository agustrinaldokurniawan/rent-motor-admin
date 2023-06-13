import React, { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native";
import Container from "../../components/container/container";
import Lottie from 'lottie-react-native'
import EmptyLottie from "../../components/lottie/empty";

export default function ListOrder({ navigation }) {
  const [orders, setOrders] = useState([])

  const onPressDetail = () => {
    navigation.navigate('DetailOrder', {
      order: {
        id: "#123"
      }
    })
  }

  if (!orders.length) {
    return <EmptyLottie />
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

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
})