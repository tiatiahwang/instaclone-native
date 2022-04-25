import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { colors } from '../colors';
import {
  useFollowUserMutation,
  UserFragmentFragment,
  useUnfollowUserMutation,
} from '../graphql/generated';
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
const FollowBtn = styled.TouchableOpacity`
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
  const [followMutation] = useFollowUserMutation({
    variables: { username: user?.username! },
    update: (cache, { data }) => {
      if (!data?.followUser.ok) return;
      cache.modify({
        id: `User:${user?.id!}`,
        fields: {
          isFollowing: (prev) => !prev,
          toalFollowing: (prev) => prev + 1,
        },
      });
    },
  });
  const [unFollowMutation] = useUnfollowUserMutation({
    variables: { username: user?.username! },
    update: (cache, { data }) => {
      if (!data?.unfollowUser.ok) return;
      cache.modify({
        id: `User:${user?.id!}`,
        fields: {
          isFollowing: (prev) => !prev,
          toalFollowing: (prev) => prev - 1,
        },
      });
    },
  });
  const goToProfile = () =>
    navigation.navigate('Profile', { username: user?.username! });
  const toggleFollow = () =>
    user?.isFollowing ? unFollowMutation() : followMutation();
  return (
    <Wrapper>
      <Column onPress={goToProfile}>
        <Avatar src={user?.avatar} size={50} />
        <Username>{user?.username}</Username>
      </Column>
      {!user?.isMe && (
        <FollowBtn onPress={toggleFollow}>
          <FollowBtnText>
            {user?.isFollowing ? '팔로잉 취소' : '팔로우'}
          </FollowBtnText>
        </FollowBtn>
      )}
    </Wrapper>
  );
};

export default UserRow;
