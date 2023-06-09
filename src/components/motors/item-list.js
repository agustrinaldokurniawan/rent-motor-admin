import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./item-list.styles";
import InterText from "../typography/inter-text";

export default function ItemListMotor({ motor, navigation }) {

  const transformPrice = (price) => {
    return price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR'
    })
  }

  const onPressDetail = () => {
    navigation.navigate("DetailMotor", {
      motor,
    });
  };

  return (
    <TouchableOpacity
      onPress={onPressDetail}
      style={styles.container}
    >
      <View style={styles.leftPanel}>
        <Image
          source={{ uri: motor.image }}
          style={styles.image}
        />
        <View>
          <InterText variant={'bold'} style={styles.name}>{motor.name}</InterText>
          <InterText>{motor.type}</InterText>
          <InterText>{transformPrice(motor.price)}</InterText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
