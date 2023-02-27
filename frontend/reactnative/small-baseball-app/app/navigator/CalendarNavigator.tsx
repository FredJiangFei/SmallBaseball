import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from '../screen/Calendar/CalendarScreen';

const Stack = createNativeStackNavigator();

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