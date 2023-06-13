import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from "../screens/home";
import ListMotor from "../screens/motors/list";
import ListOrder from "../screens/orders/list";
import MainTabItem from "./main-tab-item";
import InterText from "../components/typography/inter-text";
import ListMotorHeader from "../components/header/motor/list";
import ListOrderHeader from "../components/header/order/list";

const Tab = createBottomTabNavigator()

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Statistic"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFF',
          height: 75
        },
        tabBarActiveTintColor: '#E57C23',
        tabBarInactiveTintColor: '#858d8f',
        tabBarLabelPosition: 'beside-icon',
        tabBarIconStyle: {
          width: 50,
        },
      }}
    >
      <Tab.Screen
        name="Statistic"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: ({ focused }) => (
            <InterText variant={'bold'} style={{ color: focused && '#E57C23' }}>
              {focused ? 'Home' : ''}
            </InterText>
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
          title: 'Motors',
          header: (props) => <ListMotorHeader {...props} />,
          tabBarLabel: ({ focused }) => (
            <InterText variant={'bold'} style={{ color: focused && '#E57C23' }}>
              {focused ? 'Motors' : ''}
            </InterText>
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
          title: 'Orders',
          header: (props) => <ListOrderHeader {...props} />,
          tabBarLabel: ({ focused }) => (
            <InterText variant={'bold'} style={{ color: focused && '#E57C23' }}>
              {focused ? 'Orders' : ''}
            </InterText>
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