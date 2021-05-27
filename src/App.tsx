import React from 'react';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import Sticky from './components/Sticky';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <NavBar />
      <Overlay>
        <Sticky>
          <Landing />
        </Sticky>
        <Sticky>
          <About />
        </Sticky>
      </Overlay>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
