import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type LoggedOutNavParamList = {
  Welcome: undefined;
  Login: { username?: string; password?: string };
  CreateAccount: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'Welcome'
>;

export type LoginScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'Login'
>;

export type CreateAccountScreenProps = NativeStackScreenProps<
  LoggedOutNavParamList,
  'CreateAccount'
>;
