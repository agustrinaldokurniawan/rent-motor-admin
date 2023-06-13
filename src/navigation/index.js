import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTabs from "./main-tab";
import DetailMotor from "../screens/motors/detail";
import DetailOrder from "../screens/orders/detail";
import AddMotor from "../screens/motors/add";
import HeaderRightDetailMotor from "../components/header/motor/header-right.detail";

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShadowVisible: false,
        })}
      >
        <Stack.Screen name='MainTab' component={MainTabs} options={{
          headerShown: false
        }} />

        <Stack.Screen
          name="DetailMotor"
          component={DetailMotor}
          options={(props) => ({
            headerRight: () => <HeaderRightDetailMotor {...props} />
          })}
        />
        <Stack.Screen
          name="AddMotor"
          component={AddMotor}
          options={{
            title: 'Tambah Motor',
          }}
        />
        <Stack.Screen name="DetailOrder" component={DetailOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}