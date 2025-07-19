import React from 'react';
import './Skills.css';
import { FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiC, SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiBootstrap, SiFirebase, SiPostman, SiVercel, SiRender } from 'react-icons/si';

const skills = [
  { name: "C", icon: <SiC color="#659ad2" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "ReactJS", icon: <FaReact color="#61dafb" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "NodeJS", icon: <FaNodeJs color="#68a063" /> },
  { name: "ExpressJS", icon: <SiExpress color="#fff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
  { name: "GitHub", icon: <FaGitAlt color="#fff" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Render", icon: <SiRender color="#46e3b7" /> },
  { name: "Vercel", icon: <SiVercel color="#fff" /> },
];

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2>My Skills & Technologies</h2>
      <div className="skills-grid">
       {skills.map((skill, index) => (
  <div 
    key={index} 
    className="skill-card" 
    style={{ '--i': index }}
  >
    <div className="icon">{skill.icon}</div>
    <div className="name">{skill.name}</div>
  </div>
))}

      </div>
    </div>
  );
};

export default Skills;
