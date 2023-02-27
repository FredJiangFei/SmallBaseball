import { createStackNavigator } from '@react-navigation/stack';
import CreateEventScreen from '../screen/Events/CreateEventScreen';
import EventsScreen from '../screen/Events/EventsScreen';

const Stack = createStackNavigator();

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
