import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Container from "../../components/container/container";
import Motors from "../../service/motor";
import ListMotorComponent from "../../components/motors/list";
import InterText from "../../components/typography/inter-text";
import { styles } from "./list.style";

import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <View style={styles.mainView}>
        <ListMotorComponent motors={motors} navigation={navigation} style={styles.list} />
      </View>
    </Container>
  );
}
