import styled from 'styled-components/native';
import { UserFragmentFragment } from '../graphql/generated';
import Avatar from './Avatar';

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;
const Username = styled.Text`
  font-weight: 600;
  color: white;
  margin-left: 15px;
`;
const FollowBtn = styled.View`
  margin-right: 10px;
  border: 1px solid white;
  padding: 10px;
`;
const FollowBtnText = styled.Text`
  color: white;
  font-weight: 600;
`;

interface Props {
  user: UserFragmentFragment | null;
}

const UserRow = ({ user }: Props) => {
  return (
    <Wrapper>
      <Column>
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
