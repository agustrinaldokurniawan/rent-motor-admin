import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Container from "../../components/container/container";
import Lottie from "lottie-react-native";
import EmptyLottie from "../../components/lottie/empty";
import { listOrder } from "../../api/order";
import LoadingLottie from "../../components/lottie/loading";
import ListOrderComponent from "../../components/order/list-order";

export default function ListOrder({ navigation }) {
  const [orders, setOrders] = useState([]);
  const { data, error, isLoading } = listOrder();

  const onPressDetail = () => {
    navigation.navigate("DetailOrder", {
      order: {
        id: "#123",
      },
    });
  };

  if (isLoading) {
    return <LoadingLottie />;
  }

  if (!data.length) {
    return <EmptyLottie />;
  }

  return (
    <Container>
      <View>
        <ListOrderComponent order={data} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
});
