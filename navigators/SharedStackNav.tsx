import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { SharedNavParamList } from '../navTypes';
import Comments from '../screens/Comments';
import Feed from '../screens/Feed';
import Likes from '../screens/Likes';
import Me from '../screens/Me';
import Notifications from '../screens/Notifications';
import Photo from '../screens/Photo';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator<SharedNavParamList>();

interface Props {
  screenName: 'Feed' | 'Search' | 'Notifications' | 'Me';
}
const SharedStackNav = ({ screenName }: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }}
    >
      {screenName === 'Feed' && (
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                source={require('../assets/logo.png')}
                resizeMode="contain"
                style={{ width: 120, height: 40 }}
              />
            ),
          }}
        />
      )}
      {screenName === 'Search' && (
        <Stack.Screen name="Search" component={Search} />
      )}
      {screenName === 'Notifications' && (
        <Stack.Screen name="Notifications" component={Notifications} />
      )}
      {screenName === 'Me' && <Stack.Screen name="Me" component={Me} />}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};

export default SharedStackNav;
