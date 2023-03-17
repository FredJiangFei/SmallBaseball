import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screen/Calendar/CalendarScreen';

const Stack = createStackNavigator();

export default function CalendarNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}
    >
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}
