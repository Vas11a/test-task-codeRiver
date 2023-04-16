import React from 'react';
import { motion } from 'framer-motion';

export default function Title({text}) {
  return (
    <motion.div 
    initial={{
      x:-1000,
      opacity: 0
    }}  
    animate={{
      x:0,
      opacity: 1
    }}
    transition={{
      delay: 1.5,
      duration: 1.5,
    }}
    className='title'>{text}</motion.div>
  )
}
