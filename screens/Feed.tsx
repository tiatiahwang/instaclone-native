import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FeedScreenProps } from '../navTypes';

const Feed = ({ navigation }: FeedScreenProps) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
        <Text style={{ color: 'white' }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
