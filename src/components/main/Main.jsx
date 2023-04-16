import React from 'react';
import s from './main.module.css';
import { motion } from 'framer-motion';
import Apps from './Apps';
import Line from './Line';
import MainImg from './MainImg';
import MainText from './MainText';


export default function Main() {
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
      delay: .7,
      duration: 1.5,
    }}
    className={s.container}>
        <div className={s.text_block}>
            <Apps/>
            <MainText/>
        </div>
        <MainImg/>
        <Line/>
    </motion.div>  
  )
}
