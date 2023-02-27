import { createStackNavigator } from '@react-navigation/stack';
import MineScreen from '../screen/Mine/MineScreen';

const Stack = createStackNavigator();

export default function MineNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Mine" component={MineScreen} />
    </Stack.Navigator>
  );
}
