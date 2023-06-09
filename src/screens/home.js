import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/container/container';

export default function HomeScreen() {
  return (
    <Container>
      <View style={styles.mainView}>
        <Text>Home Screens</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 50,
    paddingRight: 25,
    paddingBottom: 20,
    paddingLeft: 25,
  }
})