import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { Platform } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IngresosNavigator from './IngresosNavigator';
import InternamientoNavigator from './InternamientoNavigator';
import DespachosNavigator from './DespachosNavigator';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#222831"
      inactiveColor="#EEEEEE"
    >
      <Tab.Screen
        name="InternamientoNavigator"
        component={InternamientoNavigator}
        options={{
          tabBarLabel: "Internamiento",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="archive-arrow-down" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="IngresosNavigator"
        component={IngresosNavigator}
        options={{
          tabBarLabel: "Ingresos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="arrow-bottom-left"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DespachosNavigator"
        component={DespachosNavigator}
        options={{
          tabBarLabel: "Despachos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="arrow-top-right"
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
