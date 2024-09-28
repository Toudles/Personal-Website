import React, { useState } from 'react';
import twitter from './assets/twitter.png';
import linkedin from './assets/Linkedin.png';
import GitHub from './assets/GitHub.png';
import Instagram from './assets/Instagram.png';

// Define the NavBar component
function NavBar({ onContactClick }) {
  return (
    <nav className="nav">
      {/* Container for social icons */}
      <div className="social-icons">
        <a href="https://twitter.com/Touie_" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/andrew-park-a3556b23b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Toudles" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/drew.sjp/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="GitHub" className="social-icon" />
        </a>
      </div>

      {/* Site title with link to the homepage */}
      <a href="/" className="site-title" style={{ fontFamily: 'Arial, sans-serif' }}>Home</a>

      {/* Navigation menu */}
      <ul>
        <li>
          <a href="/about" style={{ fontFamily: 'Arial, sans-serif' }}>About</a>
        </li>
        <li>
          <a href="/projects" style={{ fontFamily: 'Arial, sans-serif' }}>Projects</a>
        </li>
        <li>
          <a href="#" onClick={onContactClick} style={{ fontFamily: 'Arial, sans-serif' }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
