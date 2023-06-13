import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Container from "../../components/container/container";
import ListMotorComponent from "../../components/motors/list";
import { styles } from "./list.style";
import useListMotorApi from "./api/list";
import EmptyLottie from "../../components/lottie/empty";
import LoadingLottie from "../../components/lottie/loading";
import { useIsFocused } from "@react-navigation/native";

export default function ListMotor({ navigation }) {
  const isFocused = useIsFocused()
  const { data, isLoading, error, refetch } = useListMotorApi()

  useEffect(() => {
    refetch()
  }, [isFocused])

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    )
  }

  if (isLoading) {
    return <LoadingLottie />
  }

  if (!data?.length) {
    return <EmptyLottie />
  }

  return (
    <Container>
      <View style={styles.mainView}>
        <ListMotorComponent motors={data} navigation={navigation} style={styles.list} />
      </View>
    </Container>
  );
}
