import React from 'react';
import Button from '../../ui/Button/button';
import { StyledNav } from './styles';

function Nav() {
  return (
    <StyledNav>
      <Button type="yellow" minWidth={100}>
        Users
      </Button>
      <Button type="yellow" minWidth={100}>
        Sign up
      </Button>
    </StyledNav>
  );
}

export default Nav;