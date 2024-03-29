import { createStackNavigator } from '@react-navigation/stack';
import CreateEventScreen from '../screen/Events/CreateEventScreen';
import EventsScreen from '../screen/Events/EventsScreen';
import EventDetailsScreen from '../screen/Events/EventDetailsScreen';

const Stack = createStackNavigator();

export default function EventsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}
    >
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
    </Stack.Navigator>
  );
}
