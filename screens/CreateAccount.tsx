import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';

const CreateAccount = () => {
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (next: React.RefObject<TextInput>) => {
    next.current?.focus();
  };
  return (
    <AuthLayout>
      <Input
        placeholder="이름"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <Input
        ref={lastNameRef}
        placeholder="성"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <Input
        ref={usernameRef}
        placeholder="계정 이름"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
      />
      <Input
        ref={emailRef}
        placeholder="이메일"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        keyboardType="email-address"
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
      <AuthButton text="계정 생성" />
    </AuthLayout>
  );
};

export default CreateAccount;
