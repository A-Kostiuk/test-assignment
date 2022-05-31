import React from 'react';
import LogoImage from './../../../assets/logo.svg';
import { Img } from './styles';

function Logo() {
  return (
    <a>
      <Img src={LogoImage} alt='Logo' width='104' height='26'/>
    </a>
  );
}

export default Logo;
