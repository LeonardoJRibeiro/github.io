import React from 'react';
import Landing from '../Landing';
import Contents from '../Contents';
import About from '../About';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Contact from '../Contact';

// import { Container } from './styles';

const Main: React.FC = () => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Landing />
      <About />
      <Contents />
      <Contact />
    </ThemeProvider>
  );
}

export default Main;