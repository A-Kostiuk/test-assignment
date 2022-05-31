import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  gap: 140px;
`;
