// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import SkillsPage from './pages/SkillsPage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CodingPlatformsPage from './pages/CodingPlatformsPage';
import CertificationsPage from './pages/CertificationsPage';


const App = () => (
  <Router>
    <Navbar />
    <div className="container mx-auto p-4 max-w-screen-lg">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<SkillsPage/>} />
        <Route path="/projects" element={<Projects /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coding-platforms" element={<CodingPlatformsPage/>} />
        <Route path="/certifications" element={<CertificationsPage/>} />
      </Routes>
    </div>
  </Router>
);

export default App;
