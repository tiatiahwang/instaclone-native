import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import TabIcons from '../components/nav/TabIcon';
import { View } from 'react-native';
import Me from '../screens/Me';
import StackNavFactory from '../components/nav/StackNavFactory';

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
      >
        {() => <StackNavFactory name="Feed" />}
      </Tab.Screen>
      <Tab.Screen
        name="Search"
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
      >
        {() => <StackNavFactory name="Search" />}
      </Tab.Screen>
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
      >
        {() => <StackNavFactory name="Notifications" />}
      </Tab.Screen>
      <Tab.Screen
        name="Me"
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
      >
        {() => <StackNavFactory name="Me" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default LoggedInNav;
