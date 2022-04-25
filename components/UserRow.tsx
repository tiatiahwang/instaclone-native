import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { UserFragmentFragment } from '../graphql/generated';
import { LikesScreenProps } from '../navTypes';
import Avatar from './Avatar';

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;
const Column = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Username = styled.Text`
  font-weight: 600;
  color: white;
  margin-left: 15px;
`;
const FollowBtn = styled.View`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${colors.blue};
`;
const FollowBtnText = styled.Text`
  color: white;
  font-weight: 600;
`;

interface Props {
  user: UserFragmentFragment | null;
}

const UserRow = ({ user }: Props) => {
  const navigation = useNavigation<LikesScreenProps['navigation']>();
  const goToProfile = () =>
    navigation.navigate('Profile', { username: user?.username! });
  return (
    <Wrapper>
      <Column onPress={goToProfile}>
        <Avatar src={user?.avatar} size={50} />
        <Username>{user?.username}</Username>
      </Column>
      {!user?.isMe && (
        <FollowBtn>
          <FollowBtnText>
            {user?.isFollowing ? '팔로잉 취소' : '팔로우'}
          </FollowBtnText>
        </FollowBtn>
      )}
    </Wrapper>
  );
};

export default UserRow;
