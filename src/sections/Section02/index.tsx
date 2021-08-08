import { motion, MotionValue, useTransform } from "framer-motion";
import React from 'react';
import { Title } from './style';

interface Props {
  scrollYProgress: MotionValue;
}

export default function Section02({ scrollYProgress }: Props): JSX.Element {

  const opacity = useTransform(scrollYProgress, [-0.1 ,0, 0.9, 1,], [0,1, 0.8, 0]);
  opacity.set(0)
  const bottom =  useTransform(scrollYProgress, [0, 0.85, 1,],['0vh', '0vh','100vh'],);
  return (
    <motion.div style={{ opacity, height: '100vh', width: '100%', backgroundColor: '#FFF', display: 'flex' }} >
      <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', bottom, position: 'fixed', height: '100%'}}>
        <Title >Esta página esta em construção!</Title>
      </motion.div>
    </motion.div>
  )
}
