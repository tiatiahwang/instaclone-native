import { LoggedInNavParamList } from '../navTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './TabsNav';
import UploadNav from './UploadNav';
import UploadForm from '../screens/UploadForm';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator<LoggedInNavParamList>();

const LoggedInNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen
        name="TabsNav"
        component={TabsNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadNav"
        component={UploadNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadForm"
        component={UploadForm}
        options={{
          title: '사진 업로드',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="close" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
