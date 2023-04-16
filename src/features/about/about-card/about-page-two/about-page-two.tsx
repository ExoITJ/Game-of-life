import React, { FC } from 'react';
import c from '../../../../styles/common.module.css';
import s from './about-page-two.module.css';
import Xarrow from 'react-xarrows';

const AboutPageTwo: FC = () => {
  return (
    <div className={c.flexCenterFluidContainer}>
      <h6 className={s.aboutMe}>Тема проекта: Conway's Game of Life</h6>
      <h6 className={s.aboutMe} id="my-name">
        Выполнил: Павличук Владислав
      </h6>
      <Xarrow
        start="my-name"
        end="purpose"
        startAnchor="bottom"
        endAnchor="top"
        color="lightcoral"
        dashness
        headSize={4}
      />
    </div>
  );
};

export default AboutPageTwo;
