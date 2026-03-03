import React, { useState } from 'react';

import './Nav.css';
import Time from './time/Time';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="/">My <span>Portfolio</span></a>
          </div>
          <div className="time-container">
            {<Time />}
          </div>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="menu-btn" onClick={handleMenuClick}>Home</a></li>
            <li><a href="#about" className="menu-btn" onClick={handleMenuClick}>About</a></li>
            <li><a href="#services" className="menu-btn" onClick={handleMenuClick}>Services</a></li>
            <li><a href="#skills" className="menu-btn" onClick={handleMenuClick}>Skills</a></li>
            <li><a href="#contact" className="menu-btn" onClick={handleMenuClick}>Contact</a></li>
          </ul>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Nav;
