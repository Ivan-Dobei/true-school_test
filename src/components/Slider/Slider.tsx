import React, {useEffect, useRef, useState} from 'react';
import cls from './Slider.module.scss';
import SliderCard from '../SliderCard/SliderCard';
import classNames from 'classnames';
import sliderImg1 from '../../../public/slider_img_1.jpg';
import sliderImg2 from '../../../public/slider_img_2.jpg';
import sliderImg3 from '../../../public/slider_img_3.jpg';
import sliderImg4 from '../../../public/slider_img_4.jpg';
import sliderArrow from '../../../public/slider_arrow.png';
import Image from 'next/image';

const Slider = () => {
   // mock items
   const items = [
      {img: sliderImg1, text: 'Добро пожаловать\n' + 'в True School', time: '44:14'},
      {img: sliderImg2, text: 'Новый предмет «Экономика»', time: '16:24'},
      {img: sliderImg3, text: 'Введение в финансовую грамотность', data: 5},
      {img: sliderImg4, text: 'Как и зачем\n' + 'писать конспекты', data: 11},
      {img: sliderImg1, text: 'Добро пожаловать\n' + 'в True School', time: '44:14'},
      {img: sliderImg2, text: 'Новый предмет «Экономика»', time: '16:24'},
      {img: sliderImg3, text: 'Введение в финансовую грамотность', data: 5},
      {img: sliderImg4, text: 'Как и зачем\n' + 'писать конспекты', data: 11},
   ];

   const [position, setPosition] = useState(0);
   const [sliderOffset, setSliderOffset] = useState(0);

   const slider = useRef<HTMLDivElement>(null);

   useEffect(() => {
      setSliderOffset(slider?.current?.offsetWidth || 0);
   }, []);

   const countItems = Math.round((sliderOffset / 240) - 0.1);
   const sliderCardOffset = sliderOffset <= 180 ? 180 : 240;
   const move = sliderOffset <= 180 ? 220 : 280;


   const prevHandler = () => {
      if ( position <= -move) {
         setPosition(position + move);
      }
   };

   const nextHandler = () => {
      if ( position >= -(items.length - countItems) * sliderCardOffset) {
         setPosition(position - move);
      }
   };

   return (
      <div className={cls.slider}>
         <button className={classNames(cls.btn, cls.btnPrev)} onClick={prevHandler}>
            <Image className={cls.brnArrow} src={sliderArrow} alt={'arrow'}/>
         </button>
         <div className={cls.window} ref={slider}>
            <div
               className={cls.sliderContent}
               style={{transform: `translateX(${position}px)`}}
            >
               {items.map((item, index) =>
                  <SliderCard
                     key={index}
                     text={item.text}
                     img={item.img}
                     time={item.time}
                     data={item.data}
                  />
               )}
            </div>
         </div>
         <button className={classNames(cls.btn, cls.btnNext)} onClick={nextHandler}>
            <Image className={cls.brnArrow} src={sliderArrow} alt={'arrow'}/>
         </button>
      </div>
   );
};

export default Slider;
