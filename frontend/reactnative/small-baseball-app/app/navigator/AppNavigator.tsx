import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
      )}
      {!user && <AuthNavigator />}
    </>
  );
};

export default AppNavigator;
