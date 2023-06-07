import { FlatList, Text, View } from "react-native";
import ItemListMotor from "./item-list";

export default function ListMotorComponent({ motors, navigation }) {
  return motors.length ? (
    <View>
      <FlatList
        data={motors}
        renderItem={({ item }) => (
          <ItemListMotor motor={item} navigation={navigation} />
        )}
        keyExtractor={(_, index) => index}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  ) : (
    <View>
      <Text>Tidak ada motor yang tersedia saat ini</Text>
    </View>
  );
}
