import { motion, MotionValue, useTransform } from "framer-motion";
import React from 'react';
import { Title } from './style';

interface Props {
  scrollYProgress: MotionValue;
}

export default function Section01({ scrollYProgress }: Props): JSX.Element {

  const opacity = useTransform(scrollYProgress, [0, 0.9, 1,], [1, 0.8, 0]);
  opacity.set(1)
  const top =  useTransform(scrollYProgress, [0, 0.85, 1,],['0vh', '0vh','100vh'],);
  top.set('0');
  return (
    <motion.div style={{ opacity, height: '100vh', width: '100%', backgroundColor: '#343434', display: 'flex' }} >
      <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', top, position: 'fixed', height: '100%', transition: 'all 0.3s' }}>
        <Title >Olá! Bem vindo ao meu portfólio!</Title>
      </motion.div>
    </motion.div>
  )
}
