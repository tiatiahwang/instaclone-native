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

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity<{ disabled: boolean }>`
  background-color: ${colors.blue};
  padding: 10px;
  border-radius: 3px;
  width: 100%;
  margin-top: 20px;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

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
      <AuthButton
        text="계정 만들기"
        onPress={goToCreateAccount}
        disabled={false}
      />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>로그인</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Welcome;
