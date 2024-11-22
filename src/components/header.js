import React from 'react';
import '../styles/header.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div id="header-wrapper">
      <h1 className="header-title">Welcome, My name is<br></br><span className="header-name">Parker Williams</span></h1>
      <h2 className="header-description">I am studying Computer Science and Statistics at California Baptist University!</h2>
      <img className="profile-image" src="/Parker_Williams1.png" alt="Profile" />
      <div className="social-links">
        <a className="resume" href="/ParkerWilliams_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button>Resumé</button>
        </a>
        <a className="github" href="https://www.github.com/parkerwilliams1" target="_blank" rel="noopener noreferrer">
         <FaGithub className="github-icon" />
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/parkerwilliams15" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedin-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;

