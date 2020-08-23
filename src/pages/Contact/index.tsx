import React from 'react';
import { makeStyles, Container, List, ListItemIcon, ListItemText, Paper, ListItem, Typography, Box, } from '@material-ui/core';
import { Element } from 'react-scroll';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.default
  },
  paper: {
    width: '100%',
    maxWidth: 360,
  }
}))
const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <Element name="contact" className={classes.root}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" pb={8}>
          <Typography variant="h2">Contato</Typography>
        </Box>
        <Paper className={classes.paper}>
          <List>
            <ListItem button component="a" href="mailto:leonardojr410@gmail.com">
              <ListItemIcon><MailOutlineIcon /></ListItemIcon>
              <ListItemText>leonardojr410@gmail.com</ListItemText>
            </ListItem>
            <ListItem button component="a" href="https://github.com/LeonardoJRibeiro" target="_blank" >
              <ListItemIcon><GitHubIcon /></ListItemIcon>
              <ListItemText>Github</ListItemText>
            </ListItem>
            <ListItem button component="a" href="https://www.linkedin.com/in/leonardo-ribeiro-1671981b3/" target="_blank">
              <ListItemIcon><LinkedInIcon /></ListItemIcon>
              <ListItemText>LinkedIn</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Container>
    </Element>
  );
}

export default Contact;