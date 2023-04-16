import React from 'react';
import s from './header.module.css';
import BuyButton from './BuyButton';

export default function Menue() {
    return (
        <div className={s.menu_block}>
            <div className={s.part_menu}>Clothes</div>
            <div className={s.part_menu}>Sneakers</div>
            <div className={s.part_menu}>Bags</div>
            <div className={s.part_menu}>Accessorize</div>
            <BuyButton/>
        </div>
    )
}
