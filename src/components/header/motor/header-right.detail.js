import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity, View } from "react-native";

export default function HeaderRightDetailMotor({ navigation, route }) {
  const onPressEdit = () => {
    navigation.navigate('AddMotor', {
      motor: route?.params?.motor
    })
  }

  return (
    <View>
      <TouchableOpacity onPress={onPressEdit}>
        <MaterialIcons name="edit" size={24} color={'#E57C23'} />
      </TouchableOpacity>
    </View>
  )
}