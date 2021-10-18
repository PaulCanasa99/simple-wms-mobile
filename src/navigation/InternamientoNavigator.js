import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Internamiento from '../modules/Internamiento/Internamiento';
import OrdenIngreso from '../modules/Internamiento/OrdenIngreso';
import Verificacion from '../modules/Internamiento/Verificacion';

const InternamientoNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{title: 'Internamiento de la producción'}}>
      <Stack.Screen name="Internamiento" component={Internamiento}/>
      <Stack.Screen name="OrdenIngreso" component={OrdenIngreso}/>
      <Stack.Screen name="Verificacion" component={Verificacion}/>
    </Stack.Navigator>
  );
};

export default InternamientoNavigator;
