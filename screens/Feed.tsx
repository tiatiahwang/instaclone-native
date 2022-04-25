import { FlatList, Text, View } from 'react-native';
import { useSeeFeedQuery } from '../graphql/generated';
import { FeedScreenProps } from '../navTypes';
import ScreenLayout from './ScreenLayout';

const Feed = ({ navigation }: FeedScreenProps) => {
  const { data = {}, loading } = useSeeFeedQuery({});

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(item) => item?.id + ''}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: 'white' }}>{item?.caption}</Text>
          </View>
        )}
      />
    </ScreenLayout>
  );
};

export default Feed;
