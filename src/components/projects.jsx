import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <img src="img/port1.jpg" alt="Imagen 1 del Proyecto 1" className="project-image" />
          <p>Gestoría especializada en trámites y servicios administrativos.</p>
          <a href="https://emigra.netlify.app/" className="button" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        <div className="project-card">
          <h3>Proyecto 2</h3>
          <img src="img/port2.jpg" alt="Imagen 1 del Proyecto 2" className="project-image" />
          <p>Empresa dedicada a reformas y renovaciones de viviendas.</p>
          <a href="https://errajal.netlify.app/" className="button" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
