import styled from 'styled-components';
import { css } from 'styled-components';

export const UploadWrapper = styled.div`
  position: relative;
  margin: 0 0 50px;
`;

export const UploadLabel = styled.label`
  display: flex;
  text-align: start;
`;

export const UploadSpanLeft = styled.span`
  padding: 13px 14px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;

  ${(props) =>
    props.$isError
      ? css`
          border: 2px solid #cb3d40;
        `
      : null}
`;

export const UploadSpanRight = styled.span`
  padding: 13px 15px;
  border: 1px solid #d0cfcf;
  border-left: none;
  border-radius: 0 4px 4px 0;
  flex-grow: 1;

  ${(props) =>
    props.$isError
      ? css`
          border: 2px solid #cb3d40;
          border-left: none;
        `
      : null}
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
