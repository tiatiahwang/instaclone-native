import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UploadNavParamList } from '../navTypes';
import TakePhoto from '../screens/TakePhoto';
import SelectPhotoNav from './SelectPhotoNav';

const Tab = createMaterialTopTabNavigator<UploadNavParamList>();

const UploadNav = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="SelectPhotoNav"
        component={SelectPhotoNav}
        options={{ title: '사진 선택' }}
      />

      <Tab.Screen
        name="TakePhotoNav"
        component={TakePhoto}
        options={{ title: '카메라' }}
      />
    </Tab.Navigator>
  );
};

export default UploadNav;
