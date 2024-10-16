import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/Sharieff-Suhaib/repos')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;