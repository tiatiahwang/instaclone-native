import { TextInput } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

const CreateAccount = () => {
  return (
    <AuthLayout>
      <TextInput
        placeholder="이름"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <TextInput
        placeholder="성"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <TextInput
        placeholder="계정 이름"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <TextInput
        placeholder="이메일"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <TextInput
        placeholder="비밀번호"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <AuthButton text="계정 생성" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
};

export default CreateAccount;
