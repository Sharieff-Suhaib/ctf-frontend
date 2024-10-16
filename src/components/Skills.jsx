import React from 'react';
import "../assets/skills.css";
const Skills = ({ title, imageUrl }) => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <img src={imageUrl} alt={title} loading="lazy" />
    </section>
  );
};

export default Skills;
