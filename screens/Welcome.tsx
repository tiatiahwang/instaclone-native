import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { colors } from '../colors';
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
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.View`
  background-color: ${colors.blue};
  padding: 7px 10px;
  border-radius: 3px;
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 15px;
  font-size: 16px;
`;

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  const goToCreateAccount = () => navigation.navigate('CreateAccount');
  const goToLogin = () => navigation.navigate('Login');
  return (
    <Container>
      <Logo resizeMode="contain" source={require('../assets/logo.png')} />
      <TouchableOpacity onPress={goToCreateAccount}>
        <CreateAccount>
          <CreateAccountText>계정 만들기</CreateAccountText>
        </CreateAccount>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>로그인</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};

export default Welcome;
