import React from 'react';
import { Element } from 'react-scroll';
import { makeStyles, Typography, Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "64px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.paper,
  },
}))

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <Element name="about" className={classes.root}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" pb={3}>
          <Typography variant="h2" >Sobre mim</Typography>
        </Box>
        <Box px={3}>
          <Typography variant="h5" paragraph align="justify">Se você chegou até aqui, foi porque algo em mim chamou sua atenção, certo?</Typography>
          <Typography variant="h5" paragraph align="justify">Então...</Typography>
          <Typography variant="h5" paragraph align="justify">Sempre gostei muito de tecnologias que envolvem eletrônica, elétrica, mecânica e tecnologias da informação.</Typography>
          <Typography variant="h5" paragraph align="justify">Descobri o universo da programação em meados de 2016 e somente no início de 2017, quando iniciei a faculdade, pude ter certeza que essa é a carreira que pretendo seguir.</Typography>
          <Typography variant="h5" paragraph align="justify">Atualmente curso Sistemas de Informação na Unidade de Itaberaí da Universidade Estadual de Goiás.</Typography>
        </Box>
      </Container>
    </Element>
  );
}

export default About;