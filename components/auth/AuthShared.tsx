import styled from 'styled-components/native';

export const Input = styled.TextInput<{ last?: boolean }>`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px 7px;
  border-radius: 4px;
  color: white;
  margin-bottom: ${({ last }) => (last ? 15 : 8)}px;
`;
