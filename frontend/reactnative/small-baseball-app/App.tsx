import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar, ColorMode } from 'native-base';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AuthContext } from './app/auth/context';
import AppNavigator from './app/navigator/AppNavigator';
import theme from './app/theme/theme';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  }
};

export default function App() {
  const [user, setUser] = useState();

  const colorModeManager: StorageManager = {
    get: async () => {
      let val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    },
    set: async (value: ColorMode) => {
      await AsyncStorage.setItem('@color-mode', value ?? 'light');
    },
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NativeBaseProvider theme={theme} config={config} colorModeManager={colorModeManager}>
        <AuthContext.Provider value={{ user, setUser }}>
          <NavigationContainer>
            <AppNavigator></AppNavigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});
