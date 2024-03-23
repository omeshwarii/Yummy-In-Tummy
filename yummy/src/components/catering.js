import React, { useRef } from 'react'
import './catering.css'
import emailjs from '@emailjs/browser';
import bgCatering from '../../src/images/catering.jpg';

const Catering = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sakox47', 'template_rzim3en', form.current, {
        publicKey: '9t5j9ynZc3hdsfvZx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
        <img src={bgCatering} alt="" className="bgCatering" />
        <div className="contactMe">
          <h1 className="contactPageTitle">Contact Us</h1>
          <span className="contactDesc">Schedule your catering today!</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='name' name="your_name" />
            <input type="text" className="email" placeholder='email' name="your_email" />
            <textarea className='msg' name="message" rows="5" placeholder='your message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            
          </form>
        </div>
    </section>
     
  )
}

export default Catering