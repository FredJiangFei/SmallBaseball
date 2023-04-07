import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks';
import HomeTabsNavigator from './HomeTabsNavigator';
import routes from './routes';
import LoginScreen from '../screen/Login/LoginScreen';
import RegisterScreen from '../screen/Register/RegisterScreen';
import SettingScreen from '../screen/Serttings';
import { ChevronLeftIcon, Pressable } from 'native-base';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useAuth();
  const nav: NavigationProp<ParamListBase> = useNavigation();

  return (
    <>
      {user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeTabsNavigator} />
          <Stack.Screen
            name="Settings"
            component={SettingScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={routes.Login}
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen name={routes.Login} component={LoginScreen} />
          <Stack.Screen name={routes.Register} component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AppNavigator;
