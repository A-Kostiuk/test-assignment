import styled from 'styled-components';

export const StyledButton = styled.a`
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: inherit;
  border: none;
  padding: 4px 0;
  border-radius: 80px;
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : '100%')};
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => {
    switch (props.$color) {
      case 'yellow':
        return props.theme.colors.yellow;
      default:
        return props.theme.colors.white;
    }
  }};

  &:hover {
    background-color: ${(props) => {
    switch (props.$color) {
      case 'yellow':
        return props.theme.colors.yellowButtonHover;
      default:
        return props.theme.colors.white;
    }
  }};
  };

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledButton};
    color: ${(props) => props.theme.colors.disabledButtonText}
  }
`;
