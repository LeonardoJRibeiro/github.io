import React from 'react';
import { createStyles, makeStyles, Typography, } from '@material-ui/core';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    paddingTop: "64px",
    height: `calc(100vh)`,
    display: "flex",
    width: '100%',
    alignItems: "center",
    transition: 'all 0.3s',
    justifyContent: 'center',
    position: 'absolute',
  },

  card: {
    maxWidth: theme.breakpoints.width('md'),
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    transition: 'all 0.3s',
  }
}))

const About: React.FC = () => {
  const classes = useStyles();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0.225, 0.25, 0.8, 0.8], [0, 1, 1, 0]);
  const opacityTitle = useTransform(scrollYProgress, [0.25, 0.35, 0.4], [1, 1, 0]);
  const opacitySo = useTransform(scrollYProgress, [0.375, 0.40, 0.45, 0.50], [0, 1, 1, 0]);
  const opacityAbout = useTransform(scrollYProgress, [0.475, 0.50, 0.55, 0.60], [0, 1, 1, 0]);

  return (
    <>
      <motion.div className={classes.root} style={{
        opacity
      }}>
        <motion.div style={{ opacity: opacityTitle }} className={classes.card}>
          <Typography variant="h2" paragraph align="justify">Se você chegou até aqui, foi porque algo em mim chamou sua atenção, certo?</Typography>
        </motion.div>
      </motion.div>
      <motion.div className={classes.root} style={{
        opacity
      }}>
        <motion.div style={{ opacity: opacitySo }} className={classes.card}>
          <Typography variant="h2" paragraph align="center">Então...</Typography>
        </motion.div>
      </motion.div>
      <motion.div className={classes.root} style={{
        opacity
      }}>
        <motion.div style={{ opacity: opacityAbout }} className={classes.card}>
          <Typography variant="h4" paragraph align="justify">Sou desenvolvedor fullstack e apaixonado por tecnologia, principalmente as que envolvem programação, eletrônica e elétrica.</Typography>
          <Typography variant="h4" paragraph align="justify">Descobri o universo da programação em meados de 2016 e no início de 2017, no começo da minha graduação, pude ter certeza que essa é a carreira que pretendo seguir.</Typography>
          <Typography variant="h4" paragraph align="justify">Sou bacharel em Sistemas de Informação pela Unidade Universitária de Itaberaí da Universidade Estadual de Goiás.</Typography>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;