import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Sidebar from './Sidebar';
import './AboutMe.css'; // Import the CSS files
import './Projects.css';
import './Sidebar.css';

function App() {
    return (
      <div className="container">
        <Sidebar />
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