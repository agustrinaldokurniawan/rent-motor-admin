import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";

import MainTabs from "./src/navigation/main-tab";
import DetailMotor from "./src/screens/motors/detail";
import DetailOrder from "./src/screens/orders/detail";
import AddMotor from "./src/screens/motors/add";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerShadowVisible: false,
        })}
      >
        <Stack.Screen name='MainTab' component={MainTabs} options={{
          headerShown: false
        }} />

        <Stack.Screen
          name="DetailMotor"
          component={DetailMotor}
        />
        <Stack.Screen
          name="AddMotor"
          component={AddMotor}
          options={{
            title: 'Tambah Motor'
          }}
        />
        <Stack.Screen name="DetailOrder" component={DetailOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}