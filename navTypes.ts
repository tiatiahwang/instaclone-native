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
  FeedTab: undefined;
  SearchTab: undefined;
  CameraTab: undefined;
  NotificationsTab: undefined;
  MeTab: undefined;
};

export type TabsNavParamList = {
  FeedTab: undefined;
  SearchTab: undefined;
  CameraTab: undefined;
  NotificationsTab: undefined;
  MeTab: undefined;
};

export type SharedNavParamList = {
  Feed: undefined;
  Search: undefined;
  Notifications: undefined;
  Me: undefined;
  Photo: undefined;
  Profile: { username: string };
  Likes: undefined;
  Comments: undefined;
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

export type ProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Profile'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInNavParamList>
  >
>;

export type MeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Me'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInNavParamList>
  >
>;
