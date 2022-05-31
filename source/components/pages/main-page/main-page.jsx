import React from 'react';
import About from '../../blocks/about/about';
import GetRequest from '../../blocks/get-request/get-request';
import PostRequest from '../../blocks/post-request/post-request';

function  MainPage() {
  return (
    <>
      <About />
      <GetRequest />
      <PostRequest />
    </>
  );
}

export default MainPage;
