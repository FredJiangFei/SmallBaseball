import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MineScreen from '../screen/Mine/MineScreen';

const Stack = createNativeStackNavigator();

export default function MineNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mine" component={MineScreen} />
    </Stack.Navigator>
  );
}
