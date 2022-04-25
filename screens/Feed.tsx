import { FlatList, Text, View } from 'react-native';
import { useSeeFeedQuery } from '../graphql/generated';
import { FeedScreenProps } from '../navTypes';
import Photo from './Photo';
import ScreenLayout from './ScreenLayout';

const Feed = ({ navigation }: FeedScreenProps) => {
  const { data, loading } = useSeeFeedQuery();

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{ width: '100%' }}
        data={data?.seeFeed}
        keyExtractor={(item) => item?.id + ''}
        renderItem={({ item: photo }) => <Photo photo={photo} />}
      />
    </ScreenLayout>
  );
};

export default Feed;
