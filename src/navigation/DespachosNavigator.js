import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Despachos from '../modules/Despachos/Despachos';

const DespachosNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Despachos" component={Despachos} />
    </Stack.Navigator>
  );
};

export default DespachosNavigator;
