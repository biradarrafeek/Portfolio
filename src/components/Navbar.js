
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 p-4 flex justify-between">
    <div className="text-white text-lg">
      <Link to="/">About</Link>
    </div>
    <div className="flex space-x-4">
      <Link className="text-white" to="/skills">Skills</Link>
      <Link className="text-white" to="/projects">Projects</Link>
      <Link className="text-white" to="/coding-platforms">Coding Platforms</Link>
      <Link className="text-white" to="/certifications">Certifications</Link>
      <Link className="text-white" to="/contact">Contact</Link>

    </div>
  </nav>
);

export default Navbar;
