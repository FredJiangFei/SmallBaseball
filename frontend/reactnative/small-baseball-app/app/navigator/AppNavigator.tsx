import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      )}
      {!user && <AuthNavigator />}
    </>
  );
};

export default AppNavigator;
