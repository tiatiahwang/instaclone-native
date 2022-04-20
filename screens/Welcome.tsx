import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoggedOutNavParamList } from '../navigators/LoggedOutNav';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type WelcomeScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'Welcome'
>;

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View>
          <Text>Go to Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
