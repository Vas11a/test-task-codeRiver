import React from 'react';
import s from './choose.module.css';
import { motion } from 'framer-motion';
import img1 from '../../imgs/im.png';
import img2 from '../../imgs/im-1.png';
import img3 from '../../imgs/im-2.png';
import img4 from '../../imgs/im-3.png';
import slideButton from '../../imgs/arrow.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
    const swiperRef = React.useRef(null);
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
            delay: 1.5,
            duration: 1.5,
          }}
        className={s.container_slider}>
            <div className={s.slider_wrap}>
                <Swiper

                    ref={swiperRef}
                    breakpoints={{
                        960: {
      
                          slidesPerView: 4,
                        },
                        750: {
                            
                            slidesPerView: 3,
                        },
                        470: {
                        
                            slidesPerView: 2,
                        }
                      }}
                    className={s.slider}
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    
                >
                    <SwiperSlide className={s.img}>
                        <img src={img1} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img2} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img3} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img4} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img1} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img2} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img3} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img4} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide className={s.img}>
                        <img src={img3} alt="slide" />
                    </SwiperSlide>

                </Swiper>
                <div className={s.button_block}>
                    <div className={s.button_left} onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <img src={slideButton} alt="L" />
                    </div>
                    <div className={s.button_right} onClick={() => swiperRef.current.swiper.slideNext()}>
                    <img src={slideButton} alt="R" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
