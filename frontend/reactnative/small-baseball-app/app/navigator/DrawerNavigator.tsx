import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screen/SettingsScreen';
import { MoonIcon, Pressable, SunIcon, useColorMode } from 'native-base';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerRight: () => (
          <Pressable onPress={toggleColorMode}>
            {colorMode === 'light' ? (
              <SunIcon size={8} mr={2} />
            ) : (
              <MoonIcon size={8} mr={2} />
            )}
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
