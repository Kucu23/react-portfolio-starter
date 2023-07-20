import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zr7tzv8', 'template_kjd9di8', form.current, 'FC1bb7YdCQpYuAjJL')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="user_name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
    <input type="email" name="user_email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
    <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
    <button type="submit" value="Send" className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
      Send
    </button>
    
</form>
  );
};