import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Ingresos from '../modules/Ingresos/Ingresos';
import IngresoUnidad from '../modules/Ingresos/IngresoUnidad';
import IngresoUbicacion from '../modules/Ingresos/IngresoUbicacion';

const IngresosNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresos" component={Ingresos} />
      <Stack.Screen name="IngresoUnidad" component={IngresoUnidad} />
      <Stack.Screen name="IngresoUbicacion" component={IngresoUbicacion} />
    </Stack.Navigator>
  );
};

export default IngresosNavigator;
