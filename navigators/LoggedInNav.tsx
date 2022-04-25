import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import TabIcons from '../components/nav/TabIcon';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const LoggedInNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              name={'home'}
              focusedName={'home-outline'}
              focused={focused}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              name={'search'}
              focusedName={'search-outline'}
              focused={focused}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              name={'camera'}
              focusedName={'camera-outline'}
              focused={focused}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              name={'heart'}
              focusedName={'heart-outline'}
              focused={focused}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcons
              name={'person'}
              focusedName={'person-outline'}
              focused={focused}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedInNav;
