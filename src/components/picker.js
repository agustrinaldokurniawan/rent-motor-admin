import { Picker as RNPicker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function Picker({ selectedValue, onValueChange, options }) {
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(true)
  }

  const onBlur = () => {
    setFocus(false)
  }

  const styleProps = { focused: focus }

  return (
    <View
      style={styles(styleProps).container}
    >
      <RNPicker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        onFocus={onFocus}
        onBlur={onBlur}
        itemStyle={styles(styleProps).itemStyle}
      >
        {
          options.map((item, key) => (
            <RNPicker.Item
              key={key}
              label={item.label}
              value={item.value} />
          ))
        }
      </RNPicker>
    </View>
  )
}

const styles = ({ focused }) => StyleSheet.create({
  container: {
    borderColor: focused ? '#E57C23' : 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  itemStyle: {
    fontFamily: 'Inter_700Bold',
  }
})