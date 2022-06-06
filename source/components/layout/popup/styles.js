import styled from 'styled-components';
import { Section } from '../../styled';
import Button from '../../ui/Button/button';

export const PopupSection = styled(Section)`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  max-width: 800px;
  border-radius: 20px;
  transform: translate(0, -50%);
  box-shadow: 0 20px 40px rgb(0 0 0 / 40%);
  background-color: ${(props) => props.theme.colors.defaulWhite};
  padding: 30px 60px;
`;

export const Close = styled(Button)`
  position: absolute;
  top: 30px;
  right: 20px;
  border-radius: 50%;
`;
