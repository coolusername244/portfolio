'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

const ProfileSubHeader = () => {
  return (
    <Typewriter
      options={{ loop: false, cursorClassName: 'hidden' }}
      onInit={typewriter => {
        typewriter
          .pauseFor(1500)
          .changeDelay(40)
          .changeDeleteSpeed(1)
          .changeDelay(60)
          .typeString('Front End Developer')
          .pauseFor(500)
          .deleteAll()
          .typeString('Back End Developer')
          .pauseFor(500)
          .deleteAll()
          .typeString('Full Stack Developer')
          .start();
      }}
    />
  );
};

export default ProfileSubHeader;
