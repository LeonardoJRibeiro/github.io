import React, { useContext } from 'react';
import { AppBar, Toolbar, Grid, Typography, makeStyles, Tooltip, IconButton } from '@material-ui/core';
import { Link } from 'react-scroll';
import ThemeContext from '../../contexts/ThemeContext';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
  },
  linkActive: {
    color: theme.palette.action.disabled
  },
}))

const NavBar: React.FC = () => {
  const classes = useStyles();
  const { dark, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <AppBar position="fixed" color="inherit">
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
                  <Link to="contact" smooth="easeOutBounce" duration={500} spy activeClass={classes.linkActive} className={classes.link}>
                    <Typography>Contato</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Tooltip title={`Alterar tema para ${dark ? "claro" : "escuro"}`}>
                <IconButton onClick={()=>changeTheme()}>
                  <InvertColorsIcon/>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;