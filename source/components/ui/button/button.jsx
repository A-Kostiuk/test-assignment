import React from 'react';
import { StyledButton } from './styles';

function Button({ children, color, minWidth, link, ...props }) {
  return (
    <StyledButton
      $color={color}
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: 'button', type: 'button' })}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
