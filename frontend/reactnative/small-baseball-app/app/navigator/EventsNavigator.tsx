import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateEventScreen from '../screen/Events/CreateEventScreen';
import EventsScreen from '../screen/Events/EventsScreen';

const Stack = createNativeStackNavigator();

export default function EventsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
    </Stack.Navigator>
  );
}
