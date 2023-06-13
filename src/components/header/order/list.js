import { StyleSheet } from "react-native";
import InterText from "../../typography/inter-text";
import MainHeader from "../main-header";
export default function ListOrderHeader({ }) {
  return (
    <MainHeader style={styles.container}>
      <InterText variant={'bold'} fontSize={30}>Semua Order</InterText>
    </MainHeader>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})