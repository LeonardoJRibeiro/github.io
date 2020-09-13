import React, { memo, useCallback, useContext, useMemo, useState } from 'react';
import { AppBar, Toolbar, Grid, Typography, makeStyles, Tooltip, IconButton, Hidden, Menu, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import { Link } from 'react-scroll';
import ThemeContext from '../../contexts/ThemeContext';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
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
  const { theme, changeTheme, getNextTheme } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTheme = useCallback(() => {
    changeTheme(getNextTheme());
  }, [changeTheme, getNextTheme]);

  const getIconTheme = useCallback(() => {
    switch (theme) {
      case "auto": {
        return <BrightnessAutoIcon />
      }
      case "dark": {
        return <BrightnessLowIcon />
      }
      case "light": {
        return <BrightnessHighIcon />
      }
    }
  }, [theme]);

  const getIconButtonTheme = useMemo(() => {
    const nexTheme = getNextTheme();
    let nexThemeName = "";
    switch (nexTheme) {
      case "auto": {
        nexThemeName = "automático";
        break;
      }
      case "dark": {
        nexThemeName = "escuro";
        break;
      }
      case "light": {
        nexThemeName = "claro";
        break;
      }
    }
    return (
      <Tooltip title={`Alterar tema para ${nexThemeName}`}>
        <IconButton onClick={handleTheme}>
          {
            getIconTheme()
          }
        </IconButton>
      </Tooltip>
    )
  }, [getIconTheme, getNextTheme, handleTheme]);



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
                {getIconButtonTheme}
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
              <ListItem button onClick={handleTheme}>
                <ListItemIcon>
                  {getIconButtonTheme}
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

export default memo(NavBar);