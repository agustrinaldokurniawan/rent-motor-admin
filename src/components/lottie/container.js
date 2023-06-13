import { StyleSheet, View } from 'react-native';
import Container from '../container/container';

export default function ContainerLottie({ children }) {
  return (
    <Container>
      <View style={styles.containerView}>
        {children}
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