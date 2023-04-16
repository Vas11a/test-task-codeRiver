import React from 'react';
import { motion } from 'framer-motion';
import s from './header.module.css';
import Menue from './Menue';

export default function Header() {
  return (
    <motion.div
    initial={{
      x:1000,
      opacity: 0
    }}  
    animate={{
      x:0,
      opacity: 1
    }}
    transition={{
      delay: 0,
      duration: 1.5,
    }}
    className={s.container}>
        <h1 className={s.title}>Landing</h1>
        <Menue/>
    </motion.div>
  )
}
