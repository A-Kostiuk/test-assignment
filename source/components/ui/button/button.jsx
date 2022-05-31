import React from 'react';
import { StyledButton } from './styles';

function Button({ children, type, minWidth, link, ...props }) {
  return (
    <StyledButton
      $type={type}
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: 'button', type: 'button' })}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
