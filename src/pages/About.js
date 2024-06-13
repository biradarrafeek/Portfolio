import React from 'react';
import resume from '../assets/Resume.pdf';
import profile from '../assets/Rafeek.jpg';

const About = () => (
  <div className="p-4 flex flex-col items-center">
    <h1 className="text-4xl md:text-5xl font-bold text-center">About Me</h1>

    <div className="flex flex-col items-center mt-4">
      <img src={profile} alt="Profile" className="w-40 h-40 md:w-48 md:h-48  rounded-full shadow-lg" />
      <h3 className="mt-4 text-2xl md:text-3xl text-center"> <span className="animate-pulse text-red-600">Welcome to my personal portfolio website!</span> </h3>
    </div>

    <p className="mt-4 text-lg md:text-xl text-center">
      Passionate and dedicated full-stack web developer, I thrive on tackling challenges and driving innovation within organizations. Committed to continuous learning, I eagerly embrace new technologies and methodologies to expand my skill set and contribute to organizational success.
    </p>

    <a href={resume} download="Resume.pdf" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg">
      Download Resume
    </a>
  </div>
);

export default About;
