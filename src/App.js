import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Sidebar from './Sidebar'
import './AboutMe.css';
import './Projects.css';

function App() {
    return (
        <div>
          <div id="about-me-section">
            <AboutMe />
          </div>
          <div id="projects-section">
            <Projects />
          </div>
          <div id="sidebar">
            <Sidebar />
          </div>
        </div>
    );
  }

  
  export default App;
