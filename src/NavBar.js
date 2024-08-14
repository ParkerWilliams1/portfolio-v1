import React from 'react';

const NavBar = () => {
  return (
    <aside className="sideMenu">
      <p className="logo">Ac</p>
      <nav>
        <ul className="navBar">
          <li className="homeNav">
            <a href="#home" className="navItem">
              <i className="lni lni-home"></i>
              <span className="navItemName">HOME</span>
            </a>
          </li>
          <li className="aboutNav">
            <a href="#about" className="navItem">
              <i className="lni lni-user"></i>
              <span className="navItemName">ABOUT</span>
            </a>
          </li>
          <li className="skillsNav">
            <a href="#skills" className="navItem">
              <i className="lni lni-code-alt"></i>
              <span className="navItemName">SKILLS</span>
            </a>
          </li>
          <li className="worksNav">
            <a href="#works" className="navItem">
              <i className="lni lni-briefcase"></i>
              <span className="navItemName">WORKS</span>
            </a>
          </li>
          <li className="contactNav">
            <a href="#contact" className="navItem">
              <i className="lni lni-phone"></i>
              <span className="navItemName">CONTACT</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="scrollDown">
        <i className="lni lni-arrow-down"></i>
        <span className="navItemName scrollDownText">Scroll Down</span>
      </div>
    </aside>
  );
};

export default NavBar;
