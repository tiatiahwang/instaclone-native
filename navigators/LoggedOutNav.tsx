import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';

type ParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
