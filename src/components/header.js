import React from 'react';

const Header = () => {
  return (
    <div id="header-wrapper">
      <h1>Welcome, My name is Parker Williams</h1>
      <h2>I am studying Computer Science and Statistics at California Baptist University!</h2>
      <img className="profile-image" src="/ParkerWilliams.png" alt="Profile" />
        
      <a href="/ParkerWilliams_Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="resume">Resumé</button>
      </a>
      <a href="https://www.github.com/parkerwilliams1" target="_blank" rel="noopener noreferrer">
        <button className="github">Here is my github</button>  
      </a>
      <a href="https://www.linkedin.com/in/parkerwilliams15" target="_blank" rel="noopener noreferrer">
        <button className="linkedin">LinkedIn</button>
      </a>
    </div>
  );
};

export default Header;

