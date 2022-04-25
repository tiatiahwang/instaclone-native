import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
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

export type LoggedInNavParamList = {
  TabsNav: undefined;
};

export type TabsNavScreenProps = NativeStackScreenProps<
  LoggedInNavParamList,
  'TabsNav'
>;

export type TabsNavParamList = {
  Feed: undefined;
  Search: undefined;
  Camera: undefined;
  Notifications: undefined;
  Me: undefined;
};

export type SharedNavParamList = {
  Feed: undefined;
  Search: undefined;
  Notifications: undefined;
  Me: undefined;
  Photo: undefined;
};

export type FeedScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Feed'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInNavParamList>
  >
>;

export type SearchScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Search'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInNavParamList>
  >
>;

export type PhotoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Photo'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInNavParamList>
  >
>;
