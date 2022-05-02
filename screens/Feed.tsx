import { FlatList, RefreshControl } from 'react-native';
import { useSeeFeedQuery } from '../graphql/generated';
import Photo from '../components/Photo';
import ScreenLayout from '../components/ScreenLayout';

const Feed = () => {
  const { data, loading, refetch, fetchMore } = useSeeFeedQuery({
    variables: { offset: 0 },
  });

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.02}
        onEndReached={() =>
          fetchMore({
            variables: { offset: data?.seeFeed?.length },
          })
        }
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
