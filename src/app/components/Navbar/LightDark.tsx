import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const LightDark = () => {
  return (
    <>
      <li className="ml-5 cursor-pointer">
        <BsSun />
      </li>
      <li className="cursor-pointer mr-5">
        <BsMoon />
      </li>
    </>
  );
};

export default LightDark;
