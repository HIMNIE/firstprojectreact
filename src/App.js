import React from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';
import Skills from './components/Skills'; 






function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />  {/* Renderiza el formulario de contacto */}
      <Footer />
    </div>
  );
}

export default App;
