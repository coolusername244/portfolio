import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const LightDark = () => {
  return (
    <>
      <li className="m-4 cursor-pointer">
        <BsSun />
      </li>
      <li className="m-4 cursor-pointer">
        <BsMoon />
      </li>
    </>
  );
};

export default LightDark;
