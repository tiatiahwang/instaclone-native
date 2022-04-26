import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Avatar from './Avatar';
import {
  SeeFeedQuery,
  SeePhotoQuery,
  useToggleLikeMutation,
} from '../graphql/generated';
import { FeedScreenProps } from '../navTypes';

const Container = styled.View``;
const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
`;
const Likes = styled.Text`
  color: white;
  margin: 7px 0;
  font-weight: 600;
`;
const ExtraContainer = styled.View`
  padding: 0px 10px;
`;

type ArrayElement<ArrayType extends readonly unknown[] | null | undefined> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
interface Props {
  photo: ArrayElement<SeeFeedQuery['seeFeed']> | SeePhotoQuery['seePhoto'];
}

const Photo = ({ photo }: Props) => {
  console.log(photo);
  const navigation = useNavigation<FeedScreenProps['navigation']>();
  const { width } = useWindowDimensions();
  const [imgHeight, setImgHeight] = useState(0);

  const [toggleLikeMutation] = useToggleLikeMutation({
    variables: { id: photo?.id! },
    update: (cache, { data }) => {
      if (!data?.toggleLike.ok || !photo) return;
      const id = `Photo:${photo?.id!}`;
      cache.modify({
        id,
        fields: {
          isLiked: (prev) => !prev,
          likes: (prev) => (!photo?.isLiked ? prev + 1 : prev - 1),
        },
      });
    },
  });

  const goToProfile = () =>
    navigation.navigate('Profile', { username: photo?.user?.username! });
  const goToLikes = () => navigation.navigate('Likes', { id: photo?.id! });
  const goToComments = () => navigation.navigate('Comments');

  useEffect(() => {
    const file = photo?.file!;
    Image.getSize(file, (w, h) => {
      setImgHeight((h * width) / w);
    });
  }, [photo]);

  return (
    <Container>
      <Header onPress={goToProfile}>
        <Avatar src={photo?.user.avatar} size={40} />
        <Username style={{ marginLeft: 10 }}>{photo?.user?.username}</Username>
      </Header>
      <File
        style={{ width, height: width || imgHeight }}
        source={{ uri: photo?.file }}
      />
      <ExtraContainer>
        <Actions>
          <Action onPress={() => toggleLikeMutation()}>
            <Ionicons
              name={photo?.isLiked ? 'heart' : 'heart-outline'}
              color={photo?.isLiked ? 'tomato' : 'white'}
              size={20}
            />
          </Action>
          <Action onPress={goToComments}>
            <Ionicons name="chatbubble-outline" color="white" size={18} />
          </Action>
        </Actions>
        <TouchableOpacity onPress={goToLikes}>
          <Likes>
            {photo?.likes === 0
              ? '0 like'
              : photo?.likes === 1
              ? '1 like'
              : `${photo?.likes} likes`}
          </Likes>
        </TouchableOpacity>
        <Caption>
          <TouchableOpacity onPress={goToProfile}>
            <Username>{photo?.user.username}</Username>
          </TouchableOpacity>
          <CaptionText>{photo?.caption}</CaptionText>
        </Caption>
      </ExtraContainer>
    </Container>
  );
};

export default Photo;
