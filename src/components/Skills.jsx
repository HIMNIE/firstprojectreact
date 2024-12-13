import React from 'react';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Mi Portafolio</h1>
        {/* Aquí puedes agregar el menú de navegación */}
      </header>
      
      {/* Aquí agregas la sección de habilidades */}
      <section id="skills">
        <h2>Mis habilidades</h2>
        <div className="skills-container">
          <div className="skill">
            <i className="fab fa-react"></i> {/* Icono de React */}
            <p><strong>React</strong> - Desarrollo de interfaces interactivas</p>
          </div>
          <div className="skill">
            <i className="fab fa-js-square"></i> {/* Icono de JavaScript */}
            <p><strong>JavaScript</strong> - Programación dinámica en la web</p>
          </div>
          <div className="skill">
            <i className="fab fa-html5"></i> {/* Icono de HTML */}
            <p><strong>HTML</strong> - Estructuración de páginas web</p>
          </div>
          <div className="skill">
            <i className="fab fa-css3-alt"></i> {/* Icono de CSS */}
            <p><strong>CSS</strong> - Estilización y diseño responsivo</p>
          </div>
          <div className="skill">
            <i className="fab fa-microsoft"></i> {/* Icono de C# */}
            <p><strong>C#</strong> - Desarrollo de aplicaciones con .NET</p>
          </div>
          <div className="skill">
            <i className="fas fa-database"></i> {/* Icono de SQL */}
            <p><strong>SQL</strong> - Gestión y consulta de bases de datos</p>
          </div>
        </div>
      </section>
      
      {/* Más secciones de tu portafolio */}
    </div>
  );
}

export default App;
