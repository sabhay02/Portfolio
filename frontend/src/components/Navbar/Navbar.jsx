import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes,FaCode } from 'react-icons/fa'; // icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <FaCode size={28} color="#f17822" />
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
  <li><a href="#home">Home</a></li>
<li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
 <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
<li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
</div>


<a href="#contact" className="connect-btn" onClick={() => setMenuOpen(false)}>
  Connect With Me
</a>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
