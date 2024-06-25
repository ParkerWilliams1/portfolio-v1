import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import './AboutMe.css'; // Import the CSS files
import './Projects.css';
import './Sidebar.css';
import CustomSidebar from './Sidebar';

function App() {
    return (
      <div className="container">
        <div className="content">
          <div id="about-me-section">
            <AboutMe />
          </div>
          <div id="projects-section">
            <Projects />
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
