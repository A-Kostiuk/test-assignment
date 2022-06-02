import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 0;
  margin-bottom: ${(props) =>
    props.$marginBottom ? `${props.$marginBottom}px` : 0};
`;

export const Label = styled.label`
  position: absolute;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.lightGrey};
  color: ${(props) => props.theme.colors.darkGrey};
  padding: 2px 4px;
  opacity: 0;
  left: 16px;
  top: -7px;
`;

export const Field = styled.input`
  font-family: inherit;
  line-height: inherit;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  padding: 13px 15px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGrey};

  ${(props) =>
    props.$isError
      ? css`
          border: 2px solid #cb3d40;
          & ~ ${Label} {
            color: #cb3d40;
          }
        `
      : null}

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, ${Label}:active {
    opacity: 1;
  }
`;

export const Error = styled.div`
  text-align: start;
  position: absolute;
  top: 58px;
  color: #cb3d40;
  font-size: 12px;
  line-height: 14px;
  padding: 0 15px;
`;

export const Tel = styled.span`
  color: rgba(126, 126, 126, 1);
`;
