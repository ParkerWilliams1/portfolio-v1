import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header.js';
import Projects from './components/projects.js';
import Work from './components/work.js';
import Navbar from './components/navbar.js';
import './styles/main.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
