import React, { FC } from 'react';
import c from '../../../styles/common.module.css';
import AboutPageOne from './about-page-one';
import AboutPageTwo from './about-page-two';
import AboutPageThree from './about-page-three';
import AboutPageFour from './about-page-four';
import { Xwrapper } from 'react-xarrows';

const AboutCard: FC = () => {
  return (
    <Xwrapper>
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
