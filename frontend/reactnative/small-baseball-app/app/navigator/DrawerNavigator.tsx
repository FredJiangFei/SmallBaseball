import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MineNavigator from './MineNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <MyDrawer {...props} />}
      screenOptions={{
        drawerType: 'front',
        headerShown: false
      }}
    >
      <Drawer.Screen name="MineNavigator" component={MineNavigator} />
    </Drawer.Navigator>
  );
};

const MyDrawer = ({ navigation }) => {
  return (
      <DrawerContentScrollView>
          <DrawerItem label="Settings" onPress={() => navigation.navigate("Settings")} />
          <DrawerItem label="History" onPress={() => navigation.navigate("History")} />
      </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
