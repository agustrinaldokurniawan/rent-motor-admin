import { FlatList, View } from "react-native";
import ItemListMotor from "./item-list";

export default function ListMotorComponent({ motors, navigation, style }) {
  return (
    <View>
      <FlatList
        data={motors}
        renderItem={({ item }) => (
          <ItemListMotor motor={item} navigation={navigation} />
        )}
        keyExtractor={(_, index) => index}
        style={[style]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
