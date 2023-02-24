import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import DrawerNavigator from './app/navigator/DrawerNavigator';
import theme from './theme';

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
