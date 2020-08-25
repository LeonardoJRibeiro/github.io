import React from 'react';
import { AppBar, Toolbar, Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
  },
  linkActive:{
    color: theme.palette.text.primary
  },
}))

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link to="landing" spy smooth="easeOutBounce" className={classes.link} activeClass={classes.linkActive} duration={500} >
                <Typography variant="h6">Leonardo Ribeiro</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Link to="about" smooth="easeOutBounce" duration={500} spy activeClass={classes.linkActive} className={classes.link} >
                    <Typography>Sobre mim</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="projects" smooth="easeOutBounce" duration={500} spy activeClass={classes.linkActive} className={classes.link} >
                    <Typography>Projetos</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="contact" smooth="easeOutBounce" duration={500} spy activeClass={classes.linkActive}  className={classes.link}>
                    <Typography>Contato</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;