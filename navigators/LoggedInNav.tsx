import { LoggedInNavParamList } from '../navTypes';
import useMe from '../hooks/useMe';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './TabsNav';
import Upload from '../screens/Upload';

const Stack = createNativeStackNavigator<LoggedInNavParamList>();

const LoggedInNav = () => {
  const { data } = useMe();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="Tabs" component={TabsNav} />
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
