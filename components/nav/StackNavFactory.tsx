import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../../screens/Feed';
import Me from '../../screens/Me';
import Notifications from '../../screens/Notifications';
import Photo from '../../screens/Photo';
import Profile from '../../screens/Profile';
import Search from '../../screens/Search';

const Stack = createNativeStackNavigator();

interface Props {
  name: 'Feed' | 'Search' | 'Notifications' | 'Me';
}
const StackNavFactory = ({ name }: Props) => {
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
      {name === 'Feed' && <Stack.Screen name="Feed" component={Feed} />}
      {name === 'Search' && <Stack.Screen name="Search" component={Search} />}
      {name === 'Notifications' && (
        <Stack.Screen name="Notifications" component={Notifications} />
      )}
      {name === 'Me' && <Stack.Screen name="Me" component={Me} />}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
};

export default StackNavFactory;
