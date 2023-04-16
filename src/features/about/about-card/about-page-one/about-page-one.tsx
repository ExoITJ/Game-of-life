import React, { FC } from 'react';
import s from './about-page-one.module.css';
import c from '../../../../styles/common.module.css';

const AboutPageOne: FC = () => {
  return (
    <div className={c.flexCenterFluidContainer}>
      <span className={s.animatedTitle}>OTUS React.JS Developer</span>
    </div>
  );
};

export default AboutPageOne;
