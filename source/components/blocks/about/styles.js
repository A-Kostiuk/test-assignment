import styled from 'styled-components';
import Text from '../../ui/text/text';
import Title from '../../ui/title/title';
import Image from './../../../assets/pexels-alexandr-podvalny-1227513.jpeg';

export const Section = styled.section`
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  min-height: 500px;
  padding-top: 40px;
  padding-bottom: 40px; 

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    padding-top: 88px;
    padding-bottom: 88px;
  }

  @media (min-width: ${(props) => props.theme.laptopWidth}) {
    padding-top: 163px;
    padding-bottom: 163px;
    min-height: 650px;
  }

  @media (min-width: ${(props) => props.theme.desctopWidth}) {
    max-width: ${(props) => props.theme.desctopWidth};
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${(props) => props.theme.mobilePadding};

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 0 ${(props) => props.theme.tabletPadding};
  }

  @media (min-width: ${(props) => props.theme.laptopWidth}) {
    padding: 0 ${(props) => props.theme.laptopPadding};
  }

  @media (min-width: ${(props) => props.theme.desctopWidth}) {
    padding: 0;
    max-width: ${(props) => props.theme.desctopWidth};
  }
`;

export const AboutTitle = styled(Title)`
  color: ${(props) => props.theme.colors.defaulWhite};
`;

export const AboutText = styled(Text)`
  color: ${(props) => props.theme.colors.defaulWhite};
`;
