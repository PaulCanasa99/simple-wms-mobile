import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#FFFFFF',
    background: '#4C7EA4',
    card: '#214D5B',
    text: '#FFFFFF',
    border: '#214D5B',
    notification: 'rgb(255, 69, 58)',
  },
};

const RootNavigator = () => {
    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'red'} />
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator
                    screenOptions={{
                      headerMode: 'false'
                    }}
                    >
                    {/* <Stack.Screen
                        name={Routes.LOGIN_VIEW}
                        component={views.LoginView}
                        options={{
                            header: () => null
                        }} /> */}
                    <Stack.Screen
                        name={'BottomTabNavigator'}
                        component={BottomTabNavigator}
                         />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default RootNavigator;
