import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 104px 1fr;
  align-items: center;
  gap: 10px;
  min-width: ${(props) => props.theme.mobileWidth};
  margin: 0 auto;
  min-height: ${(props) => props.theme.headerHeight};
  padding: 10px ${(props) => props.theme.mobilePadding};

@media (min-width: ${(props) => props.theme.tabletWidth}) {
  padding: 10px ${(props) => props.theme.tabletPadding};
}

@media (min-width: ${(props) => props.theme.laptopWidth}) {
  padding: 10px ${(props) => props.theme.laptopPadding};
}

@media (min-width: ${(props) => props.theme.desktopWidth}) {
  padding: 10px 0;
  max-width: ${(props) => props.theme.desktopWidth};
}
`;
