import { StyleSheet, Text } from "react-native"
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

export default function InterText({ children, variant, fontSize, style }) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontsLoaded) return null

  return <Text style={[styles({ variant, fontSize }).text, style]}>{children}</Text>
}

const getVariant = (variant) => {
  switch (variant) {
    case 'bold':
      return 'Inter_700Bold'
    default:
      return 'Inter_400Regular'
  }
}

const styles = ({ variant, fontSize }) => StyleSheet.create({
  text: {
    fontFamily: getVariant(variant),
    fontSize: fontSize ? fontSize : 16
  }
})