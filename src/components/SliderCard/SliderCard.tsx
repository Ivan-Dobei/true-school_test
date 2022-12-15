import React from 'react';
import cls from './SliderCard.module.scss';
import Image, {StaticImageData} from 'next/image';
import messageIcon from '../../../public/card_message.png';
import playIcon from '../../../public/card_play.png';
import shareIcon from '../../../public/card_share.png';
import dataIcon from '../../../public/card_data_img.png';

interface SliderCardProps {
   text: string;
   img: StaticImageData;
   time?: string;
   data?: number;
}

const SliderCard = (props: SliderCardProps) => {
   const {text, img, time, data} = props;

   if (data) {
      return (
         <div className={cls.sliderCard}>
            <div className={cls.imgContainer}>
               <div className={cls.dataContainer}>
                  <div className={cls.dataImgContainer}>
                     <Image className={cls.dataImg} src={dataIcon} alt={'data Icon'} />
                  </div>
                  <p className={cls.data}>Осталось {data} дней</p>
               </div>
               <Image className={cls.img} src={img} alt={'f'}/>
            </div>
            <h3 className={cls.title}>{text}</h3>
         </div>
      );
   }

   return (
      <div className={cls.sliderCard}>
         <div className={cls.imgContainer}>
            <div className={cls.time}>
               {time}
            </div>
            <Image className={cls.img} src={img} alt={'f'}/>
            <ul className={cls.items}>
               <li className={cls.item}>
                  <Image className={cls.itemImg} src={messageIcon} alt={'message Icon'}/>
               </li>
               <li className={cls.item}>
                  <Image className={cls.itemImg} src={playIcon} alt={'play Icon'}/>
               </li>
               <li className={cls.item}>
                  <Image className={cls.itemImg} src={shareIcon} alt={'shared Icon'}/>
               </li>
            </ul>
         </div>
         <h3 className={cls.title}>{text}</h3>
      </div>
   );
};

export default SliderCard;
