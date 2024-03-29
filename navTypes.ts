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
  UploadNav: undefined;
  UploadForm: { file: string };
};

export type UploadFormScreenProps = NativeStackScreenProps<
  LoggedInNavParamList,
  'UploadForm'
>;

export type UploadNavParamList = {
  SelectPhotoNav: undefined;
  TakePhotoNav: undefined;
};

export type SelectPhotoNavParamList = {
  SelectPhoto: undefined;
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
  Photo: { id: number };
  Profile: { username: string };
  Likes: { id: number };
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

export type LikesScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedNavParamList, 'Likes'>,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInNavParamList>
  >
>;

export type SelectPhotoNavScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UploadNavParamList, 'SelectPhotoNav'>,
  NativeStackScreenProps<LoggedInNavParamList>
>;

export type TakePhotoNavScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UploadNavParamList, 'TakePhotoNav'>,
  NativeStackScreenProps<LoggedInNavParamList>
>;
