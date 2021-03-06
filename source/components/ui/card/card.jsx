import React from 'react';
import Text from '../text/text';
import { Photo } from './styles';

function Card({name, position, phone, email, photo}) {
  return (
    <>
      <Photo width={70} height={70} alt="Photo" src={photo}/>
      <Text marginBottom={20}>{name}</Text>
      <Text>{position}</Text>
      <Text as='a' href={`mailto:${email}`}>{email}</Text>
      <Text as='a' href={`tel:${phone}`}>{phone}</Text>
    </>
  );
}

export default Card;
