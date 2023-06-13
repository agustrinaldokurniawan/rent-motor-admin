import { StyleSheet, View } from "react-native";
export default function MainHeader({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})