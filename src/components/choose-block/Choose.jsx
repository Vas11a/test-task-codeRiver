import React from 'react';
import s from './choose.module.css';
import Slider from './Slider';
import Title from '../title/Title';
import About from '../about/About';

export default function Choose() {
  return (
    <div 
    className={s.container}>
      <Title text={'CHOOSE LOOKS'}/>
      <Slider/>
      <About/>
    </div>
  )
}
