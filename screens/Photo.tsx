import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Avatar from '../components/Avatar';
import { SeeFeedQuery } from '../graphql/generated';
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
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text`
  color: white;
`;
const Likes = styled.Text`
  color: white;
`;

type ArrayElement<ArrayType extends readonly unknown[] | null | undefined> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
interface Props {
  photo: ArrayElement<SeeFeedQuery['seeFeed']>;
}

const Photo = ({ photo }: Props) => {
  const navigation = useNavigation<FeedScreenProps['navigation']>();
  const { width } = useWindowDimensions();
  const [imgHeight, setImgHeight] = useState(0);
  const goToProfile = () =>
    navigation.navigate('Profile', { username: photo?.user?.username! });
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
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>
        {photo?.likes === 0
          ? '0 like'
          : photo?.likes === 1
          ? '1 like'
          : `${photo?.likes} likes`}
      </Likes>
      <Caption>
        <TouchableOpacity onPress={goToProfile}>
          <Username>{photo?.user.username}</Username>
        </TouchableOpacity>
        <CaptionText>{photo?.caption}</CaptionText>
      </Caption>
    </Container>
  );
};

export default Photo;
