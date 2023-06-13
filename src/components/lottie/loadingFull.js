import { StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native'
import ContainerFullLottie from './containerFull';

export default function LoadingFullLottie() {
  return (
    <ContainerFullLottie>
      <Lottie style={styles.emptyLottie} source={require('../../lottie/54355-motorcycle-loading.json')} autoPlay loop />
    </ContainerFullLottie>
  )
}

const styles = StyleSheet.create({
  emptyLottie: {
    transform: [
      { scale: .75 }
    ]
  }
})