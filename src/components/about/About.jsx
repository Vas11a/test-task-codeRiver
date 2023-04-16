import React from 'react';
import s from './about.module.css';
import Title from '../title/Title';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className={s.container}>
        <Title text={'more about us'}/>
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
          delay: 1.5,
          duration: 1.5,
        }}
        className={s.text}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex sunt ea quos autem ducimus ipsum facere modi in doloribus! Nostrum odio, ratione aspernatur distinctio id labore! Commodi, eveniet! Labore odio, corrupti veniam odit maiores blanditiis beatae tempore error dolorum quas excepturi dolor iure, molestiae temporibus quasi fugiat officiis laborum, hic harum aut. Perspiciatis omnis, dolorem, cumque animi voluptatum voluptatem soluta velit vel assumenda eveniet officia, voluptatibus tempora amet sit rem esse quas et accusantium odit similique. Laboriosam doloribus, consectetur ducimus corporis rerum accusamus numquam in ad, reiciendis nesciunt vel id, neque voluptas! Unde veniam temporibus adipisci labore beatae enim totam!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex sunt ea quos autem ducimus ipsum facere modi in doloribus! Nostrum odio, ratione aspernatur distinctio id labore! Commodi, eveniet! Labore odio, corrupti veniam odit maiores blanditiis beatae tempore error dolorum quas excepturi dolor iure, molestiae temporibus quasi fugiat officiis laborum, hic harum aut. Perspiciatis omnis, dolorem, cumque animi voluptatum voluptatem soluta velit vel assumenda eveniet officia, voluptatibus tempora amet sit rem esse quas et accusantium odit similique. Laboriosam doloribus, consectetur ducimus corporis rerum accusamus numquam in ad, reiciendis nesciunt vel id, neque voluptas! Unde veniam temporibus adipisci labore beatae enim totam!</p>
        </motion.div>
    </div>
  )
}
