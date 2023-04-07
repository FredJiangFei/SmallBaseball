import { createStackNavigator } from '@react-navigation/stack';
import {
  HamburgerIcon,
  MoonIcon,
  Pressable,
  SunIcon,
  useColorMode,
} from 'native-base';
import HistoryScreen from '../screen/Mine/HistoryScreen';
import MineScreen from '../screen/Mine/MineScreen';

const Stack = createStackNavigator();

export default function MineNavigator({ navigation }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}
    >
      <Stack.Screen
        name="Mine"
        options={{
          headerLeft: () => (
            <HamburgerIcon
              ml={2}
              onPress={() => navigation.openDrawer()}
              size="6"
            />
          ),
          headerRight: () => (
            <Pressable onPress={toggleColorMode} mr={2}>
              {colorMode === 'light' ? (
                <SunIcon size={8} />
              ) : (
                <MoonIcon size={8} />
              )}
            </Pressable>
          ),
        }}
        component={MineScreen}
      />
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
}
