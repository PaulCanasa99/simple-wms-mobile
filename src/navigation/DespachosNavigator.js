import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Despachos from '../modules/Despachos/Despachos';
import DespachoUbicacion from '../modules/Despachos/DespachoUbicacion';
import DespachoUnidad from '../modules/Despachos/DespachoUnidad';

const DespachosNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{title: 'Despacho de unidades'}}>
      <Stack.Screen name="Despachos" component={Despachos} />
      <Stack.Screen name="DespachoUbicacion" component={DespachoUbicacion} />
      <Stack.Screen name="DespachoUnidad" component={DespachoUnidad} />
    </Stack.Navigator>
  );
};

export default DespachosNavigator;
