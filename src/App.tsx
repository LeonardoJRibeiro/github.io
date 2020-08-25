import React from 'react';
import Footer from './components/Footer';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
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
