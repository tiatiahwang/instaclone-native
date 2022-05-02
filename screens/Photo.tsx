import { RefreshControl, ScrollView } from 'react-native';
import { useSeePhotoQuery } from '../graphql/generated';
import { PhotoScreenProps } from '../navTypes';
import ScreenLayout from '../components/ScreenLayout';
import Photo from '../components/Photo';

const PhotoScreen = ({ route }: PhotoScreenProps) => {
  const { data, loading, refetch } = useSeePhotoQuery({
    variables: { id: route?.params?.id },
  });
  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={{ backgroundColor: 'black' }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
      >
        <Photo photo={data?.seePhoto} />
      </ScrollView>
    </ScreenLayout>
  );
};

export default PhotoScreen;
