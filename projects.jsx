import React from 'react';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del proyecto 1', link: '#' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2', link: '#' },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
