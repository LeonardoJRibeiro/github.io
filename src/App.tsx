import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {ThemeProvider} from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <NavBar  />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
