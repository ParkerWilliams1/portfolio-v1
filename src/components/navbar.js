import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState('/');

  const handleClick = (path) => {
    setActiveButton(path);
  };

  return (
    <div>
    <p id="home">Parker Williams</p>
    <div id="navbar-wrapper">
      <ul className="navbar-buttons">
        <li>
          <Link
            to="/"
            className={activeButton === '/' ? 'active' : ''}
            onClick={() => handleClick('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={activeButton === '/projects' ? 'active' : ''}
            onClick={() => handleClick('/projects')}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className={activeButton === '/work' ? 'active' : ''}
            onClick={() => handleClick('/work')}
          >
            Experience
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
