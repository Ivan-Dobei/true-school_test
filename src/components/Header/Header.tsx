import React from 'react';
import cls from './Header.module.scss';
import Menu from '../Menu/Menu';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => {
   return (
      <div className={cls.header}>
         <div className={cls.container}>
            <div className={cls.contentLeft}>
               <Menu/>
               <p className={cls.headerText}>
                  Подписка <span className={cls.headerText_active}>активна</span> до 20 августа 2022
               </p>
            </div>
            <div className={cls.contentRight}>
               <Image
                  className={cls.logo}
                  src={logo}
                  alt="logo"
               />
            </div>
         </div>
      </div>
   );
};

export default Header;
