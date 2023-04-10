import { Platform, StatusBar } from 'react-native';
import React from 'react';
import { View, useColorMode } from 'native-base';
import colors from '../config/colors';

export default function SbStatusBar() {
  const { colorMode } = useColorMode();
  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        backgroundColor: colorMode === 'dark' ? colors.dark : 'white',
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
      />
    </View>
  );
}
