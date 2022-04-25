import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { DEFAULT_AVATAR } from '../apollo/vars';
import Avatar from '../components/Avatar';
import { SeeFeedQuery } from '../graphql/generated';

const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text`
  color: white;
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
  const { width } = useWindowDimensions();
  return (
    <Container>
      <Header>
        <Avatar src={photo?.user.avatar} size={40} />
        <Username>{photo?.user?.username}</Username>
      </Header>
      <File style={{ width, height: width }} source={{ uri: photo?.file }} />
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
        <Username></Username>
        <CaptionText></CaptionText>
      </Caption>
    </Container>
  );
};

export default Photo;
