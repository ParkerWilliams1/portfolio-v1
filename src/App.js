import React from 'react';
import Header from './components/header.js'
import Projects from './components/projects.js'
import Work from './components/work.js'
import Navbar from './components/navbar.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Work />
      <Navbar />
    </div>
  );
}

export default App;
