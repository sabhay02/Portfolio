import React, { useRef } from 'react';
import './Connect.css';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaPhone, FaCode, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hl29hzv',     
      'template_a2fj29i',    
      form.current,
      'D4GFAJzB2x1z2bDs5'     
    )
    .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Thank you! Your message has been sent.');
        e.target.reset();
    }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Oops! Something went wrong.');
    });
  };

  return (
    <div id="contact" className="connect-section">
      <div className="connect-left">
        <h2>Connect With Me</h2>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:sabhaythakkar02@gmail.com">sabhaythakkar02@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/sabhay-thakkar-660b02291" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <a href="https://github.com/sabhay02" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <SiLeetcode className="icon" />
          <a href="https://leetcode.com/u/Sabhay02" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <span>+91-9254475961</span>
        </div>
      </div>

      <div className="connect-right">
        <h2>Send me a message</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
