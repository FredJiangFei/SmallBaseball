import { FlatList, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import ListItem from '../../components/ListItem';
import ListItemSeparator from '../../components/ListItemSeparator';
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

export default function MineScreen() {
  const { logout } = useAuth();

  return (
    <>
      <View style={styles.container}>
        <ListItem
          title="Super Mario"
          description="mario@gmail.com"
          image={require('../../../assets/mario.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(m) => m.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <SbIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => alert(item.title)}
            />
          )}
        />
      </View>
      <ListItem
        onPress={logout}
        title="Log Out"
        IconComponent={<SbIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
