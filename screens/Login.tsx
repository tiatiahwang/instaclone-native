import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LoggedOutNavParamList } from '../navigators/LoggedOutNav';

export type LoginScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'Login'
>;

const Login = ({ navigation }: LoginScreenProps) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
