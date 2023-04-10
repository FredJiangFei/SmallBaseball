import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, ColorMode } from 'native-base';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AuthContext } from './app/auth/context';
import AppNavigator from './app/navigator/AppNavigator';
import theme from './app/theme/theme';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { SbStatusBar } from './app/components';

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  const [user, setUser] = useState();
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-BlackItalic': require('./assets/fonts/Inter-BlackItalic.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
    'Inter-BoldItalic': require('./assets/fonts/Inter-BoldItalic.otf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.otf'),
    'Inter-ExtraBoldItalic': require('./assets/fonts/Inter-ExtraBoldItalic.otf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.otf'),
    'Inter-ExtraLightItalic': require('./assets/fonts/Inter-ExtraLightItalic.otf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.otf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.otf'),
    'Inter-LightItalic': require('./assets/fonts/Inter-LightItalic.otf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.otf'),
    'Inter-MediumItalic': require('./assets/fonts/Inter-MediumItalic.otf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
    'Inter-SemiBoldItalic': require('./assets/fonts/Inter-SemiBoldItalic.otf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.otf'),
    'Inter-ThinItalic': require('./assets/fonts/Inter-ThinItalic.otf'),
    'Alkatra-Bold': require('./assets/fonts/Alkatra/Alkatra-Bold.ttf'),
    'Alkatra-Medium': require('./assets/fonts/Alkatra/Alkatra-Medium.ttf'),
    'Alkatra-Regular': require('./assets/fonts/Alkatra/Alkatra-Regular.ttf'),
    'Alkatra-SemiBold': require('./assets/fonts/Alkatra/Alkatra-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const colorModeManager: StorageManager = {
    get: async () => {
      let val = await AsyncStorage.getItem('@color-mode');
      // return val === 'dark' ? 'dark' : 'light';
      return 'light';
    },
    set: async (value: ColorMode) => {
      await AsyncStorage.setItem('@color-mode', value ?? 'light');
    },
  };

  return (
    <NativeBaseProvider
      theme={theme}
      config={config}
      colorModeManager={colorModeManager}
    >
      <SbStatusBar />
      <SafeAreaView style={styles.safeArea}>
        <AuthContext.Provider value={{ user, setUser }}>
          <NavigationContainer>
            <AppNavigator></AppNavigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});
