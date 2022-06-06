import React, { useState } from 'react';
import About from '../../blocks/about/about';
import Users from '../../blocks/users/users';
import SignUp from '../../blocks/sign-up/sign-up';

function MainPage() {
  const [register, setRegister] = useState(null);
  return (
    <>
      <About />
      <Users register={register}/>
      <SignUp setRegister={setRegister}/>
    </>
  );
}

export default MainPage;
