import React from 'react';
import cls from '../styles/Index.module.scss';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';

const Index = () => {
   return (
      <div className={cls.app}>
         <Header/>
         <div className={cls.content}>
            <Slider/>
         </div>
      </div>
   );
};

export default Index;
