import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventsNavigator from './EventsNavigator';
import CalendarNavigator from './CalendarNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

export default function HomeTabsNavigator() {
  const tabIcon = (name, size, color) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="EventsTab"
        component={EventsNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            tabIcon('clock-outline', size, color),
        }}
      />
      <Tab.Screen
        name="CalendarTab"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({ color, size }) => tabIcon('chart-bar', size, color),
        }}
      />
      <Tab.Screen
        name="MineTab"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            tabIcon('file-document', size, color),
        }}
      />
    </Tab.Navigator>
  );
}
