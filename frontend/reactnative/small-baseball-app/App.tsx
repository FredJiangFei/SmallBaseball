import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import DrawerNavigator from './app/navigator/DrawerNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}