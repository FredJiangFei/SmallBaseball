import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from '../screen/Events/EventsScreen';

const Stack = createNativeStackNavigator();

export default function EventsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
    </Stack.Navigator>
  );
}
