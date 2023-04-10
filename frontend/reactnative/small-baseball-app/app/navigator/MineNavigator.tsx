import { createStackNavigator } from '@react-navigation/stack';
import { HamburgerIcon } from 'native-base';
import HistoryScreen from '../screen/Mine/HistoryScreen';
import MineScreen from '../screen/Mine/MineScreen';

const Stack = createStackNavigator();

export default function MineNavigator({ navigation }) {
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
        }}
        component={MineScreen}
      />
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
}
