import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a
        href="/"
        className="navbar-logo"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? '/logo-who-hover.png' : '/logo-who.png'}
          alt="Brenna Sorkin Logo"
        />
      </a>
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isMenuOpen && (
        <div
          className={`overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={() => setIsMenuOpen(false)}>
          &times;
        </button>
        <a href="#about-me">About me</a>
        <a
          href="/Brenna_Sorkin_Resume.pdf"
          rel="noopener noreferrer"
          target='_blank'
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
