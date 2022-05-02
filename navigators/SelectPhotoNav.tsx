import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import {
  SelectPhotoNavParamList,
  SelectPhotoNavScreenProps,
} from '../navTypes';
import SelectPhoto from '../screens/SelectPhoto';

const Stack = createNativeStackNavigator<SelectPhotoNavParamList>();

const SelectPhotoNav = ({ navigation }: SelectPhotoNavScreenProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        headerLeft: ({ tintColor }) => (
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="close" size={24} color={tintColor} />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="SelectPhoto"
        component={SelectPhoto}
        options={{ title: '사진 선택' }}
      />
    </Stack.Navigator>
  );
};

export default SelectPhotoNav;
