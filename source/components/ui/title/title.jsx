import React from 'react';
import { StyleTitle } from './styles';

function Title({
  level,
  children,
  maxWidth,
  className,
  marginBottom,
}) {
  return (
    <StyleTitle
      className={className}
      level={level}
      as={`h${level}`}
      $maxWidth={maxWidth}
      $marginBottom={marginBottom}
    >
      {children}
    </StyleTitle>
  );
}

export default Title;
