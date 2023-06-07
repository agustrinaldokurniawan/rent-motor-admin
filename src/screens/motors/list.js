import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import Container from "../../components/container/container";
import Motors from "../../service/motor";
import ListMotorComponent from "../../components/motors/list";

export default function ListMotor({ navigation }) {
  const motorService = new Motors();

  const [motors, setMotors] = useState([]);

  useEffect(() => {
    fetchMotors();
  }, []);

  const fetchMotors = () => {
    const motors = motorService.getMotors();
    setMotors(motors);
  };

  return (
    <Container>
      <View>
        <Text>List Motor</Text>
        <ListMotorComponent motors={motors} navigation={navigation} />
      </View>
    </Container>
  );
}
