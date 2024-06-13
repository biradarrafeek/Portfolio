// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, link, demo }) => (
  <div className="border border-gray-300 rounded-lg p-6 shadow-lg transition-transform transform hover:-translate-y-1">
    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    <p className="mt-4 text-gray-600">{description}</p>
    <div className="mt-6 flex space-x-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        View on GitHub
      </a>
      <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
        View Demo
      </a>
    </div>
  </div>
);

export default ProjectCard;
