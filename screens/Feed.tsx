import { FlatList, RefreshControl } from 'react-native';
import { useSeeFeedQuery } from '../graphql/generated';
import { FeedScreenProps } from '../navTypes';
import Photo from './Photo';
import ScreenLayout from './ScreenLayout';

const Feed = () => {
  const { data, loading, refetch } = useSeeFeedQuery();

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{ width: '100%' }}
        data={data?.seeFeed}
        keyExtractor={(item) => item?.id + ''}
        renderItem={({ item: photo }) => <Photo photo={photo} />}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={loading}
            tintColor="white"
            progressBackgroundColor="black"
          />
        }
      />
    </ScreenLayout>
  );
};

export default Feed;
