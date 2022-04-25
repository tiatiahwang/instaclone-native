import styled from 'styled-components/native';

const SAvatar = styled.Image<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
`;

interface Props {
  src: string | null | undefined;
  size: number;
}

const Avatar = ({ size, src }: Props) => {
  return (
    <SAvatar
      size={size}
      defaultSource={require('../assets/user.png')}
      source={{ uri: src !== null ? src : '../assets/user.png' }}
      resizeMode="cover"
    />
  );
};

export default Avatar;
