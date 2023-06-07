import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ItemListMotor({ motor, navigation }) {
  const onPressDetail = () => {
    navigation.navigate("DetailMotor", {
      motor,
    });
  };
  return (
    <TouchableOpacity onPress={onPressDetail}>
      <View>
        <Image
          source={{ uri: motor.image }}
          style={{ width: 100, height: 100 }}
        />
        <View>
          <Text>{motor.name}</Text>
          <Text>{motor.type}</Text>
        </View>
      </View>
      <View>
        <Text>{motor.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
