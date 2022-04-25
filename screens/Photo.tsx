import { Text, TouchableOpacity, View } from 'react-native';
import { PhotoScreenProps } from '../navTypes';

const Photo = ({ navigation }: PhotoScreenProps) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ color: 'white' }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Photo;
