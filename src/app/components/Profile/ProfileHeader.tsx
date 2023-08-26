'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

const ProfileHeader = () => {
  return (
    <Typewriter
      options={{ cursorClassName: 'hidden' }}
      onInit={typewriter => {
        typewriter.changeDelay(60).typeString("Hi, I'm Lee").start();
      }}
    />
  );
};

export default ProfileHeader;
