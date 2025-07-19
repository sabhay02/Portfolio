import React, { useState, useEffect } from 'react';
import './About.css';

const introText = "👋 Hello! My name is Sabhay Thakkar, welcome to my portfolio.";
const bioText = `Hello! I’m Sabhay Thakkar, an aspiring software developer with a solid foundation 
in full-stack web development and competitive programming.
I have experience building scalable applications using the MERN stack, integrating third-party APIs. I’m passionate about solving real-world challenges 
through clean code, thoughtful design, and collaborative teamwork.`;

const About = () => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    if (showModal && index < introText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + introText.charAt(index));
        setIndex(index + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [index, showModal]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setShowBio(true), 100);
  };

  return (
    <>
      {showBio && (
        <div id="about" className="about-popup">
          <p>{bioText}</p>
         <a
  href="https://drive.google.com/file/d/1Zo3hktFGnjPJI0DaZzs6jQV4yPou4A3j/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  My Resume
</a>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{typedText}</p>
            <button className="close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
