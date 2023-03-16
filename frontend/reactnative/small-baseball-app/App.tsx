import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AuthContext } from './app/auth/context';
import AppNavigator from './app/navigator/AppNavigator';
import theme from './app/theme/theme';

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  const [user, setUser] = useState();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NativeBaseProvider theme={theme} config={config}>
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
