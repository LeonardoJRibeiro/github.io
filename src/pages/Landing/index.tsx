import React from 'react';
import { makeStyles, Typography, IconButton, Tooltip, Hidden, Box, Grid, Container, Card, Paper, createStyles, } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link, Element } from 'react-scroll'
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: 'absolute',
    height: `calc(100vh)`,
    display: "flex",
    alignItems: "center",
    transition: 'all 0.3s',
    width: '100%',
    justifyContent: 'center'
  },
  card: {
    maxWidth: theme.breakpoints.width('sm'),
    boxShadow: theme.shadows[11],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  }
}))

const Landing: React.FC = () => {
  const classes = useStyles();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.2, 0.25], [0.8, 1, 1, 0]);
  const top = useTransform(scrollYProgress, [0, 0.2, 0.25], ['0%', '0%', '100%']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.25], ['5px', '30px']);
  const stroke = useTransform(scrollYProgress, [0, 0.1], ['0', '100']);

  return (
    <motion.div
      className={classes.root}
      style={{
        opacity,
        bottom: top
      }}
    >
      <motion.div
        className={classes.card}
        style={{
          borderRadius
        }}
      >
        <Grid container >
          <Grid item xs={12}>
            <Typography variant="h1">Olá!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Me chamo Leonardo.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Bem vindo ao meu portfólio!</Typography>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
}

export default Landing;