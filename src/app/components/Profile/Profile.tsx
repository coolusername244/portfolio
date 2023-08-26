import React from 'react';
import Image from 'next/image';
import profilePic from '../../assets/images/profile-pic.jpeg';
import ProfileHeader from './ProfileHeader';
import ProfileSubHeader from './ProfileSubHeader';

const Profile = () => {
  return (
    <section id="profile" className="h-[90vh] flex justify-center text-center">
      <article>
        <div className="h-1/4 flex items-center justify-center text-3xl font-mono">
          <ProfileHeader />
        </div>
        <Image
          alt="profile-pic"
          className="rounded-full h-2/4 w-auto p-6"
          src={profilePic}
        />
        <div className="h-1/4 flex items-center justify-center text-2xl font-mono">
          <ProfileSubHeader />
        </div>
      </article>
    </section>
  );
};

export default Profile;
