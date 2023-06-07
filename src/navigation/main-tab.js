import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from "../screens/home";
import ListMotor from "../screens/motors/list";
import ListOrder from "../screens/orders/list";
import { Text } from "react-native";
import MainTabItem from "./main-tab-item";

const Tab = createBottomTabNavigator()

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Statistic"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFF',
          margin: 20,
          overflow: "hidden",
          position: 'absolute',
          borderRadius: 100,
          height: 60,
        },
        tabBarActiveTintColor: '#E57C23',
        tabBarInactiveTintColor: '#858d8f',
        tabBarLabelPosition: 'beside-icon',
        tabBarIconStyle: {
          width: 50,
        },
        tabBarItemStyle: {

        }
      }}
    >
      <Tab.Screen
        name="Statistic"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ alignItems: 'center', padding: 0, margin: 0 }}>{focused ? 'Home' : ''}</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MainTabItem focused={focused}>
              <MaterialIcons name="home-filled" color={color} size={size} />
            </MainTabItem>
          )
        }}
      />
      <Tab.Screen
        name="ListMotor"
        component={ListMotor}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text>{focused ? 'Motors' : ''}</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MainTabItem focused={focused}>
              <FontAwesome5 name="motorcycle" color={color} size={size} />
            </MainTabItem>
          ),
        }}
      />
      <Tab.Screen
        name="ListOrder"
        component={ListOrder}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text>{focused ? 'Orders' : ''}</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MainTabItem focused={focused}>
              <FontAwesome5 name="shopping-bag" color={color} size={size} />
            </MainTabItem>
          ),
        }}
      />
    </Tab.Navigator>
  )
}