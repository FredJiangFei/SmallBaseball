import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { SafeAreaView, StyleSheet } from 'react-native';
import DrawerNavigator from './app/navigator/DrawerNavigator';
import theme from './theme';

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NativeBaseProvider theme={theme} config={config}>
        <NavigationContainer>
          <DrawerNavigator></DrawerNavigator>
        </NavigationContainer>
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
