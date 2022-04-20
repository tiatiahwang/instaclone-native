import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import { LoggedOutNavParamList } from '../navigators/LoggedOutNav';

export type LoginScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'Login'
>;

interface IForm {
  username: string;
  password: string;
}

const Login = ({ navigation }: LoginScreenProps) => {
  const { control, handleSubmit } = useForm<IForm>();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (next: React.RefObject<TextInput>) => next.current?.focus();

  const onValid: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <Controller
        control={control}
        rules={{ required: true }}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input
            autoFocus
            autoCapitalize="none"
            ref={usernameRef}
            placeholder="계정 이름"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            returnKeyType="next"
            onChangeText={onChange}
            value={value}
            onSubmitEditing={() => onNext(passwordRef)}
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            ref={passwordRef}
            placeholder="비밀번호"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            returnKeyType="done"
            secureTextEntry
            last={true}
            onChangeText={onChange}
            value={value}
            onSubmitEditing={handleSubmit(onValid)}
          />
        )}
      />
      <TouchableOpacity
        containerStyle={{ width: '100%' }}
        onPress={handleSubmit(onValid)}
      >
        <AuthButton text="로그인" />
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Login;
