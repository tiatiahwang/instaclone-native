import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Top = styled.View`
  flex: 1;
  background-color: pink;
`;

const Bottom = styled.View`
  flex: 1;
  background-color: palevioletred;
`;

const SelectPhoto = () => {
  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  );
};

export default SelectPhoto;
