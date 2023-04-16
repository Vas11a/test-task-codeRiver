import React from 'react';
import s from './main.module.css';
import { motion } from "framer-motion";

export default function MainText() {
    return (
        <div className={s.text}>
            CHOOSE YOUR WINTER 
                <motion.div
                 animate={{rotate: [15, -10, 15],}}
                 transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                 }}
                 className={s.look_cont}>
                    <span className={s.look}>
                        Look
                    </span>
                </motion.div>
            APPAREL
        </div>
    )
}
