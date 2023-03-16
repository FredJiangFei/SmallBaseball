import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes';
import LoginScreen from '../screen/Login/LoginScreen';
import RegisterScreen from '../screen/Register/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.Login}>
      <Stack.Screen
        name={routes.Login}
        component={LoginScreen}
        options={{ headerTitle: 'Login', animationEnabled: false }}
      />
      <Stack.Screen name={routes.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
