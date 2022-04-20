import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { colors } from '../colors';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { LoggedOutNavParamList } from '../navigators/LoggedOutNav';

export type WelcomeScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'Welcome'
>;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  font-size: 16px;
`;

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  const goToCreateAccount = () => navigation.navigate('CreateAccount');
  const goToLogin = () => navigation.navigate('Login');
  return (
    <AuthLayout>
      <TouchableOpacity
        containerStyle={{ width: '100%' }}
        onPress={goToCreateAccount}
      >
        <AuthButton text="계정 만들기" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>로그인</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Welcome;
