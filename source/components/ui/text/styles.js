import styled from 'styled-components';

export const StyledText = styled.p`
  margin: 0;
  margin-bottom: ${(props) =>
    props.$marginBottom ? `${props.$marginBottom}px` : 0};
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : '100%')};
`;
