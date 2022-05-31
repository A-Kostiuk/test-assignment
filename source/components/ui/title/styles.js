import styled from 'styled-components';

export const StyleTitle = styled.h2`
  line-height: 40px;
  font-weight: 400;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : '100%')};
  margin: 0;
  margin-bottom: ${(props) =>
    props.$marginBottom ? `${props.$marginBottom}px` : 0};
  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.level === 1) {
      fontSize = '40px';
    }
    if (props.level === 3) {
      fontSize = '32px';
    }
    if (props.level === 4) {
      fontSize = '24px';
    }
    return fontSize;
  }};
`;
