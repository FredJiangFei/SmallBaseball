import { Divider, FlatList, View } from 'native-base';
import React from 'react';
import ListItem from '../../components/ListItem';
import SbIcon from '../../components/SbIcon';
import colors from '../../config/colors';
import { useAuth } from '../../hooks';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
  {
    title: 'Settings',
    icon: {
      name: 'account-settings',
      backgroundColor: colors.danger,
    },
  },
];

export default function MineScreen({ navigation }) {
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  }

  return (
    <>
      <View my={4}>
        <ListItem
          title="Super Mario"
          description="mario@gmail.com"
          image={require('../../../assets/mario.png')}
        />
      </View>
      <View my={4}>
        <FlatList
          data={menuItems}
          keyExtractor={(m) => m.title}
          ItemSeparatorComponent={Divider}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <SbIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.title)}
            />
          )}
        />
      </View>
      <ListItem
        onPress={handleLogout}
        title="Log Out"
        IconComponent={<SbIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </>
  );
}
