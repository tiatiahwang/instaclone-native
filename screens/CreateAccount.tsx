import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

const CreateAccount = () => {
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (next: React.RefObject<TextInput>) => {
    next.current?.focus();
  };
  return (
    <AuthLayout>
      <TextInput
        placeholder="이름"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="성"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="계정 이름"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        ref={emailRef}
        placeholder="이메일"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="비밀번호"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <AuthButton text="계정 생성" />
    </AuthLayout>
  );
};

export default CreateAccount;
