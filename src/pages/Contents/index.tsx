import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
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
    <Element name="sobre" >
      <Box className={classes.root}>

      </Box>
    </Element>
  );
}

export default Contents;