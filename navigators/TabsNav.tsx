import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcons from '../components/nav/TabIcon';
import { View } from 'react-native';
import SharedStackNav from './SharedStackNav';
import { TabsNavParamList } from '../navTypes';
import useMe from '../hooks/useMe';
import Avatar from '../components/Avatar';

const Tab = createBottomTabNavigator<TabsNavParamList>();

const TabsNav = () => {
  const { data } = useMe();
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
        name="FeedTab"
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
        {() => <SharedStackNav screenName="Feed" />}
      </Tab.Screen>
      <Tab.Screen
        name="SearchTab"
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
        {() => <SharedStackNav screenName="Search" />}
      </Tab.Screen>
      <Tab.Screen
        name="CameraTab"
        component={View}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('Upload');
            },
          };
        }}
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
        name="NotificationsTab"
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
        {() => <SharedStackNav screenName="Notifications" />}
      </Tab.Screen>
      <Tab.Screen
        name="MeTab"
        options={{
          tabBarIcon: ({ focused }) => (
            <Avatar src={data?.me?.avatar} size={24} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabsNav;
