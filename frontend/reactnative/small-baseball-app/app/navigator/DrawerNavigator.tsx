import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screen/SettingsScreen';

const Drawer = createDrawerNavigator();
const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
