import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function InputText(props) {
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(true)
  }

  const onBlur = () => {
    setFocus(false)
  }

  return (
    <TextInput 
      selectionColor={'#E57C23'} 
      onFocus={onFocus} 
      onBlur={onBlur} 
      {...props} 
      style={[styles({ focused: focus }).textInput]} 
    />
  )
}

const styles = ({ focused }) => StyleSheet.create({
  textInput: {
    borderColor: focused ? '#E57C23' : 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 12,
    borderRadius: 10,
    fontFamily: 'Inter_700Bold'
  }
})