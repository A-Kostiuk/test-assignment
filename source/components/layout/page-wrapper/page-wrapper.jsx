import React from 'react';
import MainPage from '../../pages/main-page/main-page';
import Header from '../header/header';
import { Main } from './styles';

function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <MainPage />
      </Main>
    </>
  );
}

export default PageWrapper;
