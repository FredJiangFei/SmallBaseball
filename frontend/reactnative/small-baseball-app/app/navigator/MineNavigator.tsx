import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MineScreen from '../screen/Mine/MineScreen';

const Stack = createNativeStackNavigator();

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
