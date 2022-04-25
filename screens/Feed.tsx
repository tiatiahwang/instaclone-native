import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { logUserOut } from '../apollo/vars';
import { useSeeFeedQuery } from '../graphql/generated';
import { FeedScreenProps } from '../navTypes';

const Feed = ({ navigation }: FeedScreenProps) => {
  const { data: { seeFeed } = {} } = useSeeFeedQuery();
  console.log(seeFeed);
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text style={{ color: 'white' }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
