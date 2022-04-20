import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import { LoggedOutNavParamList } from '../navigators/LoggedOutNav';

export type LoginScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'Login'
>;

const Login = ({ navigation }: LoginScreenProps) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (next: React.RefObject<TextInput>) => {
    next.current?.focus();
  };
  return (
    <AuthLayout>
      <Input
        ref={usernameRef}
        placeholder="계정 이름"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <Input
        ref={passwordRef}
        placeholder="비밀번호"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        returnKeyType="done"
        secureTextEntry
        last={true}
      />
      <AuthButton text="로그인" />
    </AuthLayout>
  );
};

export default Login;
