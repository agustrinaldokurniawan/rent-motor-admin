import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Container from "../../components/container/container";
import InterText from "../../components/typography/inter-text";

export default function DetailMotor({ route }) {
  const { motor } = route.params

  const getDuration = (duration) => {
    switch (duration) {
      case 'month':
        return 'Bulanan'
      default:
        return 'Harian'
    }
  }

  return (
    <Container>
      <View style={styles.mainView}>
        <Image source={{ uri: motor.image }} style={styles.image} />
        <View style={styles.viewDescription}>
          <InterText variant={'bold'} fontSize={20}>{motor.name}</InterText>
          <InterText>{motor.type}</InterText>

          <View style={styles.viewSpec}>
            <InterText>Durasi rental: {getDuration(motor.duration)}</InterText>
            <InterText>Merk: {motor.production}</InterText>
          </View>
        </View>
        <TouchableOpacity style={styles.rentButton}>
          <InterText variant={'bold'}
            style={styles.rentButtonText}>Perbarui Informasi</InterText>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%'
  },
  image: {
    height: 250,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  viewDescription: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2
  },
  viewSpec: {
    marginVertical: 30
  },
  rentButton: {
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 10,
    backgroundColor: '#E57C23',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  rentButtonText: {
    textAlign: 'center',
    color: '#fff'
  }
})