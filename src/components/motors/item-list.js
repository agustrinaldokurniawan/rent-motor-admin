import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./item-list.styles";
import InterText from "../typography/inter-text";
import { transformPrice } from "../../utils/idrPrice";
import { useEffect, useState } from "react";
import { fetchImageFromFirebase } from "../../utils/fetchImageFromFirebase";

export default function ItemListMotor({ motor, navigation }) {
  const [imageUri, setImageUri] = useState('No Image')

  useEffect(() => {
    fetchImage()
  }, [])

  const fetchImage = async () => {
    const resp = await fetchImageFromFirebase(motor?.image)
    if (typeof resp === 'string') {
      setImageUri(resp)
    }
  }

  const onPressDetail = () => {
    navigation.navigate("DetailMotor", {
      motor: {
        ...motor,
        id: motor?.id
      }
    });
  };

  return (
    <TouchableOpacity
      onPress={onPressDetail}
      style={styles.container}
    >
      <View style={styles.leftPanel}>
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />
        <View>
          <InterText variant={'bold'} style={styles.textName}>{motor.name}</InterText>
          <InterText style={styles.textType}>{motor.type}</InterText>
          <InterText style={styles.textPrice}>{transformPrice(motor.price)}</InterText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
