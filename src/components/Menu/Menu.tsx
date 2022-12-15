import React from 'react';
import cls from './Menu.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image';
import img1 from '../../../public/menu_img_1.png';
import img2 from '../../../public/menu_img_2.png';
import img3 from '../../../public/menu_img_3.png';
import img4 from '../../../public/menu_img_4.png';

const Menu = () => {
   const router = useRouter();

   const linkHandler = (path: string) => {
      router.push(path);
   };


   return (
      <nav className={cls.menu}>
         <ul className={cls.linkList}>
            <li className={cls.linkItem}>
               <Link
                  className={cls.link}
                  href={'/'}
               >
                  <div className={cls.imgContainer}>
                     <Image
                        className={cls.img}
                        src={img1}
                        alt={'icon'}
                     />
                  </div>
                  <span className={cls.linkText}>Work</span>
               </Link>
            </li>
            <li className={cls.linkItem}>
               <Link
                  className={cls.link}
                  href={'/'}
               >
                  <div className={cls.imgContainer}>
                     <Image
                        className={cls.img}
                        src={img2}
                        alt={'icon'}
                     />
                  </div>
                  <span className={cls.linkText}>News</span>
               </Link>
            </li>
            <li className={cls.linkItem}>
               <Link
                  className={cls.link}
                  href={'/'}
               >
                  <div className={cls.imgContainer}>
                     <Image
                        className={cls.img}
                        src={img3}
                        alt={'icon'}
                     />
                  </div>
                  <span className={cls.linkText}>Settings</span>
               </Link>
            </li>
            <li className={cls.linkItem}>
               <Link
                  className={cls.link}
                  href={'/'}
               >
                  <div className={cls.imgContainer}>
                     <Image
                        className={cls.img}
                        src={img4}
                        alt={'icon'}
                     />
                  </div>
                  <span className={cls.linkText}>Help</span>
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Menu;
