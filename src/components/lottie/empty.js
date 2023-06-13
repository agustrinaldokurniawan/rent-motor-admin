import { StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native'
import ContainerLottie from './container';

export default function EmptyLottie() {
  return (
    <ContainerLottie>
      <Lottie style={styles.emptyLottie} source={require('../../lottie/5081-empty-box.json')} autoPlay loop />
    </ContainerLottie>
  )
}

const styles = StyleSheet.create({
  emptyLottie: {
    transform: [
      { scale: .75 }
    ]
  }
})