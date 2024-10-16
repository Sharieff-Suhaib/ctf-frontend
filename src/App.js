import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Theme from './components/Theme';
import "../src/assets/styles.css";
import "../src/images/skills.png"
function App() {
  const toggleTheme = Theme();

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} />
      <main>
        <AboutMe />
        <Skills title = "Skills" imageUrl = {require("../src/images/skills.png")}/>
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;

