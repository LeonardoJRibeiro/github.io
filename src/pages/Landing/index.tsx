import React from 'react';
import { makeStyles, Typography, IconButton, Tooltip, Hidden, Box, Grid, Container, } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link, Element } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh)`,
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.default,
    transition: 'all 0.3s',
  },
}))
const Landing: React.FC = () => {
  const classes = useStyles()
  return (
    <Element name="landing" className={classes.root}>
      <Container maxWidth="md">
        <Grid container >
          <Hidden xsDown>
            <Grid item xs={12}>
              <Typography variant="h1">Olá!</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Meu nome é Leonardo.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Bem vindo ao meu portfólio!</Typography>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <Typography variant="h2">Olá!</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Meu nome é Leonardo.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Bem vindo ao meu portfólio!</Typography>
            </Grid>
          </Hidden>
          <Grid container justify="center">
            <Grid item>
              <Box mt={3}>
                <Link to="about" smooth="easeOutBounce" duration={500} >
                  <IconButton size="medium">
                    <Tooltip title="Rolar para baixo">
                      <KeyboardArrowDownIcon fontSize="large" />
                    </Tooltip>
                  </IconButton>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
}

export default Landing;