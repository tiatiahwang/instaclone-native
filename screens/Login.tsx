import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logUserIn } from '../apollo/vars';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import { useLoginMutation } from '../graphql/generated';
import { LoginScreenProps } from '../navTypes';

interface IForm {
  username: string;
  password: string;
}

const Login = ({
  route: { params: { username = '', password = '' } = {} },
}: LoginScreenProps) => {
  const { control, handleSubmit, watch } = useForm<IForm>({
    defaultValues: { username, password },
  });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [logInMutation, { loading }] = useLoginMutation();

  const onNext = (next: React.RefObject<TextInput>) => next.current?.focus();

  const onValid: SubmitHandler<IForm> = (data) => {
    if (!loading) {
      logInMutation({
        variables: data,
        onCompleted: ({ login }) => {
          if (!login.ok || !login.token) return;
          logUserIn(login.token);
        },
      });
    }
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
        <AuthButton
          text="로그인"
          isLoading={loading}
          disabled={!watch('username') || !watch('password')}
        />
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Login;
