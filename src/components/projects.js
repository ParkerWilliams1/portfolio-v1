import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  return (
    <div id="projects-wrapper">
    <h1 className="projects-header">Projects</h1>
      <div className="project-wrap">
        <h2 className="project-name">Better Blackboard Learn</h2>
        <p className="project-tech">JavaScript, HTML, CSS</p>
        <a className="product-url" href="https://chromewebstore.google.com/detail/better-blackboard-learn/ngmpmjpigceaccddpkoeejmakahopopa" target="_blank"><button>Product</button></a>
       <div className="project-description"> <ul>
          <li>Developed Chrome Extension using JavaScript providing Students full user customization of Class Images,
Names, and Themes for Blackboard Learn. Compatible with <strong>100+</strong> Universities across the world.</li>
          <li>Utilized Blackboard Learn Open API and Google Storage API to query user information and save settings.</li>
          <li>Achieved <strong>1,000+</strong> Active Users and numerous 5 Stars Reviews.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Projects;
