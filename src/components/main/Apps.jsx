import React from 'react';
import s from './main.module.css';
import ios from './../../imgs/ios.png';
import android from './../../imgs/andriod.png';

export default function Apps() {
    return (
        <div className={s.app_block}>
            <div className={s.img_app_block}>
                <div className={s.ios}>
                    <img src={ios} alt="ios" />
                </div>
                <div className={s.andriod}>
                    <img src={android} alt="andr" />
                </div>
            </div>
            <div className={s.app_text}>
                App available
            </div>
        </div>
    )
}
