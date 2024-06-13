
import React from 'react';

const Footer = ({className}) => (
  <footer className="bg-gray-800 text-white p-4 mt-8 ">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/rafeek-biradar-2975a41a7/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          LinkedIn
        </a>
        <a href="https://github.com/biradarrafeek" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          GitHub
        </a>
        <a href="https://twitter.com/biradar_rafeek" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          Twitter
        </a>
        <a href="https://www.instagram.com/biradar_rafeek/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
