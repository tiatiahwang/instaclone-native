import { FlatList, RefreshControl } from 'react-native';
import UserRow from '../components/UserRow';
import { useSeeLikesQuery } from '../graphql/generated';
import { LikesScreenProps } from '../navTypes';
import ScreenLayout from '../components/ScreenLayout';

const Likes = ({ route }: LikesScreenProps) => {
  const { data, loading, refetch } = useSeeLikesQuery({
    variables: {
      seePhotoLikesId: route?.params?.id!,
    },
    skip: !route?.params?.id,
  });

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{ width: '100%' }}
        data={data?.seePhotoLikes}
        keyExtractor={(item) => item?.id + ''}
        renderItem={({ item: user }) => <UserRow user={user} />}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
      />
    </ScreenLayout>
  );
};

export default Likes;
