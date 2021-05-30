import { motion, MotionValue, useTransform } from "framer-motion";
import React from 'react';

interface Props {
  scrollYProgress: MotionValue;
}

export default function Section01({ scrollYProgress }: Props): JSX.Element {
  console.log(scrollYProgress)
  const opacity = useTransform(scrollYProgress, [-1, 0, 0.1, 0.6, 0.7], [0, 0, 1, 1, 0]);
  opacity.set(0)
  opacity.onChange(e => console.log(e))
  console.log(opacity)
  return (
    <motion.div style={{ opacity, height: '70vh', width: '100%', backgroundColor: 'darkgray' }} >

    </motion.div>
  )
}
