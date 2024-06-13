// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
