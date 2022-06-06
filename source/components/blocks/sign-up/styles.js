import styled from 'styled-components';
import { css } from 'styled-components';
import { Ul } from '../../styled';

export const Form = styled.form`
  max-width: 380px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const Fieldset = styled.fieldset`
  text-align: start;
  border: none;
  padding: 0;
  margin: 0 0 47px;
`;

export const Legend = styled.legend`
  padding: 0;
  margin-bottom: 11px;
`;

export const RadioList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const RadioLabel = styled.span`
  display: block;
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid #d0cfcf;
    border-radius: 50%;
    left: 0;
    top: 3px;
  }

  ${(props) =>
    props.$isChecked
      ? css`
          &::before {
            border: 1px solid #00bdd3;
          }

          &::after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            top: 8px;
            left: 5px;
            background-color: #00bdd3;
            border-radius: 50%;
          }
        `
      : null}
`;
