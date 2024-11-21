import React from 'react';

const Navbar = () => {
  return(
    <div id="navbar-wrapper">
      <ul className="navbar-buttons">
        <a href="#header-wrapper"><li>Header</li></a>
        <a href="#work-wrapper"><li>Work</li></a>
       <a href="#projects-wrapper"><li>Projects</li></a>
      </ul>
    </div>
  );
};

export default Navbar;
