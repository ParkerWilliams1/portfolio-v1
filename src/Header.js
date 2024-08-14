import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="heroImageContainer">
        <img src="/assets/images/me.jpg" alt="A picture of Alex Calia" />
      </div>
      <div className="heroDescription">
        <p className="greeting">HI THERE! I'M</p>
        <h1><span>ALEX</span> CALIA</h1>
        <p className="smallBio">
          A <span>Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.
        </p>
        <div className="socialsResume">
          <a 
            className="resumeLink" 
            href="/assets/Alex-Calia-Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resumé
          </a>
          <ul className="socialsList">
            <li>
              <a 
                href="https://www.linkedin.com/in/alexander-calia-33190337/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="lni lni-linkedin-original" aria-label="Link to Alex's LinkedIn page"></i>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/alexcalia" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="lni lni-github-original" aria-label="Link to Alex's GitHub page"></i>
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com/AlexanderCalia" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="lni lni-twitter-original" aria-label="Link to Alex's Twitter profile"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
