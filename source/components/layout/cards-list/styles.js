import styled from 'styled-components';
import { Li, Ul } from '../../styled';


export const List = styled(Ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (min-width: ${(props) => props.theme.laptopWidth}) {
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
}

@media (min-width: ${(props) => props.theme.desktopWidth}) {
  max-width: ${(props) => props.theme.desktopWidth};
}
`;

export const ListItem = styled(Li)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.defaultWhite};
  width: 100%;
  height: 100%;
  min-height: 254px;
  text-align: center;
  border-radius: 10px;
`;
