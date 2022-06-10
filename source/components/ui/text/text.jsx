import React from 'react';
import { StyledText } from './styles';

function Text({ children, maxWidth, marginBottom, className, ...props }) {
  return (
    <StyledText
      $maxWidth={maxWidth}
      $marginBottom={marginBottom}
      className={className}
      {...props}
    >
      {children}
    </StyledText>
  );
}

export default Text;
