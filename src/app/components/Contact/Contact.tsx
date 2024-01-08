import React from 'react';
import ContactForm from './ContactForm';
import SocialIcons from './SocialIcons';

const Contact = () => {
  return (
    <section id="contact" className="mb-5">
      <h2 className="text-4xl font-mono font-bold text-center pt-5">Contact</h2>
      {/* <ContactForm /> */}
      <ul className="flex w-[100%] md:w-[50vw] pt-10 md:py-10 m-auto items-stretch justify-evenly md:justify-around text-4xl">
        <SocialIcons />
      </ul>
    </section>
  );
};

export default Contact;
