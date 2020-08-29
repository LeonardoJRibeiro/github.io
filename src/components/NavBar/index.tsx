import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Grid, Typography, makeStyles, Tooltip, IconButton, Hidden, Menu, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import { Link } from 'react-scroll';
import ThemeContext from '../../contexts/ThemeContext';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import ContactsIcon from '@material-ui/icons/Contacts';

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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Hidden smUp>
              <Grid item>
                <Tooltip title="Menu">
                  <IconButton onClick={handleClick}>
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Hidden>
            <Grid item>
              <Link to="landing" spy smooth="easeOutBounce" className={classes.link} activeClass={classes.linkActive} duration={500} >
                <Typography variant="h6">Leonardo Ribeiro</Typography>
              </Link>
            </Grid>
            <Hidden xsDown>
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
                  <IconButton onClick={() => changeTheme()}>
                    <InvertColorsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Hidden>
          </Grid>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <List>
              <Link to="about" smooth="easeOutBounce" duration={500} spy activeClass={classes.linkActive} className={classes.link} >
                <ListItem button onClick={handleClose}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Sobre mim</Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="projects" smooth="easeOutBounce" duration={500} spy activeClass={classes.linkActive} className={classes.link} >
                <ListItem onClick={handleClose}>
                  <ListItemIcon>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Projetos</Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="contact" smooth="easeOutBounce" duration={500} spy activeClass={classes.linkActive} className={classes.link}>
                <ListItem button onClick={handleClose}>
                  <ListItemIcon>
                    <ContactsIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Contato</Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <ListItem button onClick={() => changeTheme()}>
                <ListItemIcon>
                  <Tooltip title={`Alterar tema para ${dark ? "claro" : "escuro"}`}>

                    <InvertColorsIcon />
                  </Tooltip>
                </ListItemIcon>
                <ListItemText>
                  <Typography>Alterar tema</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;