// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => (
  <div className="p-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    <div className="flex flex-col items-center">
        <FaJava className="text-4xl text-red-600" />
        <span>Java</span>
      </div>
      <div className="flex flex-col items-center">
        <FaHtml5 className="text-4xl text-orange-600" />
        <span>HTML5</span>
      </div>
      <div className="flex flex-col items-center">
        <FaCss3Alt className="text-4xl text-blue-700" />
        <span>CSS3</span>
      </div>
      <div className="flex flex-col items-center">
        <FaJsSquare className="text-4xl text-yellow-500" />
        <span>JavaScript</span>
      </div>
      <div className="flex flex-col items-center">
        <FaReact className="text-4xl text-blue-600" />
        <span>React</span>
      </div>
      <div className="flex flex-col items-center">
        <FaNodeJs className="text-4xl text-green-600" />
        <span>Node.js</span>
      </div>
      <div className="flex flex-col items-center">
        <SiMongodb className="text-4xl text-green-600" />
        <span>MongoDB</span>
      </div>
      <div className="flex flex-col items-center">
        <SiExpress className="text-4xl text-blue-800" />
        <span>Express.js</span>
      </div>
      <div className="flex flex-col items-center">
        <FaDatabase className="text-4xl text-gray-600" />
        <span>SQL</span>
      </div>
      <div className="flex flex-col items-center">
        <FaGitAlt className="text-4xl text-orange-600" />
        <span>Git</span>
      </div>
      <div className="flex flex-col items-center">
        <SiTailwindcss className="text-4xl text-teal-500" />
        <span>Tailwind CSS</span>
      </div>
     
    </div>
  </div>
);

export default Skills;
