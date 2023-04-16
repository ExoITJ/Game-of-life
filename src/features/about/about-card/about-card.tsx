import React, { FC, useEffect } from 'react';
import c from '../../../styles/common.module.css';
import AboutPageOne from './about-page-one';
import AboutPageTwo from './about-page-two';
import AboutPageThree from './about-page-three';
import AboutPageFour from './about-page-four';
import { Xwrapper } from 'react-xarrows';
import s from './about-card.module.css';
import VpButton from '../../../common/vp-button/vp-button';
import { IoIosArrowDown } from 'react-icons/io';

const AboutCard: FC = () => {
  useEffect(() => {
    window.scrollBy({
      top: 100,
      behavior: 'smooth',
    });
  }, []);

  const handleScrollWindow = () => {
    return window.scrollBy({
      top: 1007,
      behavior: 'smooth',
    });
  };

  return (
    <Xwrapper>
      <div className={s.controlButtons}>
        <VpButton onClick={handleScrollWindow}>
          <IoIosArrowDown size={20} />
        </VpButton>
      </div>
      <div className={c.fluidModule}>
        <AboutPageOne />
      </div>
      <div className={c.fluidModule}>
        <AboutPageTwo />
      </div>
      <div className={c.fluidModule}>
        <AboutPageThree />
      </div>
      <div className={c.fluidModule}>
        <AboutPageFour />
      </div>
    </Xwrapper>
  );
};

export default AboutCard;
