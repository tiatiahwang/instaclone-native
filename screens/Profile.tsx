import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ProfileScreenProps } from '../navTypes';

const Profile = ({ route, navigation }: ProfileScreenProps) => {
  //TODO: username 변할때 느리는 것 변경하기
  useEffect(() => {
    if (route?.params?.username) {
      navigation.setOptions({ title: route.params.username });
    }
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>{route.params.username}</Text>
    </View>
  );
};

export default Profile;
