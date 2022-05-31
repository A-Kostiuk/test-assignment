import React from 'react';
import { StyledText } from './styles';

function Text({ children, maxWidth, marginBottom, className }) {
  return (
    <StyledText $maxWidth={maxWidth} $marginBottom={marginBottom} className={className}>
      {children}
    </StyledText>
  );
}

export default Text;
