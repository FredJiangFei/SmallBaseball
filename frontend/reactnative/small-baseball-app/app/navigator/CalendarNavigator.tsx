import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screen/Calendar/CalendarScreen';

const Stack = createStackNavigator();

export default function CalendarNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}
