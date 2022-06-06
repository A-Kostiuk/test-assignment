import React, { useEffect } from 'react';
import Title from '../../ui/title/title';
import SuccessImage from '../../../assets/success-image.svg';
import { Close, PopupSection } from './styles';

function Popup({ isShow, onClose }) {
  const handlerEsc = (evt) => {
    if (evt.keyCode === 27) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlerEsc);
    return () => {
      document.removeEventListener('keydown', handlerEsc);
    };
  }, []);

  return isShow ? (
    <PopupSection>
      <Title level={1} marginBottom={50}>
        User successfully registered
      </Title>
      <img src={SuccessImage} />
      <Close onClick={onClose} color='yellow' minWidth={34}>X</Close>
    </PopupSection>
  ) : null;
}

export default Popup;
