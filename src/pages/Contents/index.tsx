import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { Element } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 128px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }
}))

const Contents: React.FC = () => {
  const classes = useStyles();
  return (
    <Element name="contents" >
      <Box className={classes.root}>
        <Typography variant="h2">Em construção.</Typography>
        <Typography variant="h4">Em breve os projetos serão listados aqui.</Typography>
      </Box>
    </Element>
  );
}

export default Contents;