import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.mobilePadding};

@media (min-width: ${(props) => props.theme.tabletWidth}) {
  padding: 0 ${(props) => props.theme.tabletPadding} 0;
}

@media (min-width: ${(props) => props.theme.laptopWidth}) {
  padding: 0 ${(props) => props.theme.laptopPadding} 0;
}

@media (min-width: ${(props) => props.theme.desktopWidth}) {
  padding: 0;
  max-width: ${(props) => props.theme.desktopWidth};
}
`;

export default Section;
