import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="h-[90vh] ">
      <h2 className="text-4xl font-mono font-bold text-center pt-5">Contact</h2>
      <form action="" className="grid justify-center mt-10">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          className="mb-4 md:w-[50vw] mt-2 p-2 rounded-md text-black focus-visible:outline-emerald-500 outline-none outline-offset-0 outline-[3px] transition-all duration-200"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="john.doe@example.com"
          className="mb-4 mt-2 p-2 rounded-md text-black focus-visible:outline-emerald-500 outline-none outline-offset-0 outline-[3px] transition-all duration-200"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Hi there! I'd like to talk about..."
          className="mb-4 mt-2 p-2 rounded-md text-black focus-visible:outline-emerald-500 outline-none outline-offset-0 outline-[3px] transition-all duration-200"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="cursor-pointer justify-self-center border rounded-md py-2 hover:border-emerald-500 hover:bg-black/30 transition-all duration-200 w-[50%]"
        />
      </form>
    </section>
  );
};

export default Contact;
