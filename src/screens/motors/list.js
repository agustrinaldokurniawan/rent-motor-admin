import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native";
import Container from "../../components/container/container";
import Motors from "../../service/motor";

export default function ListMotor({ navigation }) {
  const motorService = new Motors()

  const [motors, setMotors] = useState([])

  useEffect(() => {
    fetchMotors()
  }, [])

  const fetchMotors = () => {
    const motors = motorService.getMotors()
    setMotors(motors)
  }

  const onPressDetail = () => {
    navigation.navigate('DetailMotor', {
      motor: {
        name: "Kawasaki Super"
      }
    })
  }

  return (
    <Container>
      <View>
        <Text>List Motor</Text>
        {
          motors.map((item, key) =>
            <View key={key}>
              <Text>{item.name}</Text>
            </View>
          )
        }
        <Button title="Detail" onPress={onPressDetail} />
      </View>
    </Container>
  )
}