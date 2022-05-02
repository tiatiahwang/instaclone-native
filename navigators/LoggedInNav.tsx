import { LoggedInNavParamList } from '../navTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './TabsNav';
import UploadNav from './UploadNav';
import useMe from '../hooks/useMe';

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
      <Stack.Screen name="TabsNav" component={TabsNav} />
      <Stack.Screen name="UploadNav" component={UploadNav} />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
