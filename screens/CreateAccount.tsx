import React, { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import { useCreateAccountMutation } from '../graphql/generated';
import { CreateAccountScreenProps } from '../navTypes';

interface IForm {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

const CreateAccount = ({ navigation }: CreateAccountScreenProps) => {
  const { control, handleSubmit, getValues } = useForm<IForm>();
  const [createAccountMutation, { loading }] = useCreateAccountMutation();

  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (next: React.RefObject<TextInput>) => next.current?.focus();

  const onValid: SubmitHandler<IForm> = (data) => {
    if (loading) return;
    createAccountMutation({
      variables: data,
      onCompleted: ({ createAccount }) => {
        if (!createAccount.ok) return;
        const { username, password } = getValues();
        navigation.navigate('Login', { username, password });
      },
    });
  };

  return (
    <AuthLayout>
      <Controller
        control={control}
        rules={{ required: true }}
        name="firstName"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="이름"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            returnKeyType="next"
            onSubmitEditing={() => onNext(lastNameRef)}
            autoFocus
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <Input
            ref={lastNameRef}
            placeholder="성"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            returnKeyType="next"
            onSubmitEditing={() => onNext(usernameRef)}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input
            autoCapitalize="none"
            ref={usernameRef}
            placeholder="계정 이름"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            returnKeyType="next"
            onSubmitEditing={() => onNext(emailRef)}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            autoCapitalize="none"
            ref={emailRef}
            placeholder="이메일"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => onNext(passwordRef)}
            onChangeText={onChange}
            value={value}
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
        <AuthButton text="계정 생성" isLoading={loading} />
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default CreateAccount;
