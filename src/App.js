import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
// import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
