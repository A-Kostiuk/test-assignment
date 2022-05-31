import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body,
  html {
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    font-family: ${(props) => props.theme.fontFamily}, 'Arial', sans-serif;
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeightDefault};
    font-weight: ${(props) => props.theme.fontWeightDefault};
    color: ${(props) => props.theme.colors.defaultBalck};
  }

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`;
