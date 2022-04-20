import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';

export type LoggedOutNavParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

const Stack = createNativeStackNavigator<LoggedOutNavParamList>();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
