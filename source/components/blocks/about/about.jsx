import React from 'react';
import Button from '../../ui/Button/button';
import { AboutText, AboutTitle, Section, Wrapper } from './styles';

function About() {
  return (
    <Section>
      <Wrapper>
        <AboutTitle level={1} maxWidth={380} marginBottom={21}>
          Test assignment for front-end developer
        </AboutTitle>
        <AboutText maxWidth={380} marginBottom={32}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they&apos;ll be building web interfaces with accessibility
          in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </AboutText>
        <Button color="yellow" minWidth={100} link="#sign_up">
          Sign up
        </Button>
      </Wrapper>
    </Section>
  );
}

export default About;
