import styled from 'styled-components/native';
import { colors } from '../../colors';

const Button = styled.View<{ disabled?: boolean }>`
  background-color: ${colors.blue};
  padding: 13px 10px;
  border-radius: 3px;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

interface Props {
  text: string;
}

const AuthButton = ({ text }: Props) => {
  return (
    <Button>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default AuthButton;
