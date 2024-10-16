import React from 'react';

const Navbar = ({ toggleTheme }) => {
  return (
    <nav>
      <a href="#about">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button onClick={toggleTheme} className="theme-toggle">Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
