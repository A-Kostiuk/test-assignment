import styled from 'styled-components';

export const StyledText = styled.p`
  display: block;
  margin: 0;
  color: ${(props) => props.theme.colors.defaultBlack};
  margin-bottom: ${(props) =>
    props.$marginBottom ? `${props.$marginBottom}px` : 0};
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : '100%')};
  word-break: break-all;
`;
