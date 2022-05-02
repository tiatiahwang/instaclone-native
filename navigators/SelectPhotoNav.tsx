import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectPhotoNavParamList } from '../navTypes';
import SelectPhoto from '../screens/SelectPhoto';

const Stack = createNativeStackNavigator<SelectPhotoNavParamList>();

const SelectPhotoNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectPhoto"
        component={SelectPhoto}
        options={{ title: '사진 선택' }}
      />
    </Stack.Navigator>
  );
};

export default SelectPhotoNav;
