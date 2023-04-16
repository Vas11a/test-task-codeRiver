import React from 'react';
import s from './main.module.css';
import { motion } from 'framer-motion';
import mainImg from '../../imgs/main_img.png';

export default function MainImg() {
    return (
        <motion.div 
        initial={{
            x:500,
            opacity: 0
          }}  
          animate={{
            x:0,
            opacity: 1
          }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
        className={s.img_block}>
            <img src={mainImg} className={s.main_img} alt="create" />
        </motion.div>
    )
}
