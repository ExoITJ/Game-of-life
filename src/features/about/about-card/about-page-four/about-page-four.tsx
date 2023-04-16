import React, { FC } from 'react';
import s from './about-page-four.module.css';
import {
  SiRedux,
  SiReact,
  SiJest,
  SiTestinglibrary,
  SiWebpack,
  SiTypescript,
  SiStorybook,
  SiEslint,
  SiReactrouter,
} from 'react-icons/si';
import Xarrow from 'react-xarrows';
import VpButton from '../../../../common/vp-button';
import { IoIosArrowUp } from 'react-icons/io';

const AboutPageFour: FC = () => {
  const handleScrollWindowToUp = () => {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={s.aboutPageFourBlock}>
      <div className={s.tools} id="tools">
        <div className={s.iconWithDesc}>
          <SiWebpack size={80} color="#75afcc" />
          <pre>Webpack 5.79.0</pre>
        </div>
        <div className={s.toolsFlex}>
          <div className={s.innerTools}>
            <h6>Написание/проверка кода</h6>
            <div>
              <div className={s.iconWithDesc}>
                <SiReact size={80} color="#087ea4" />
                <pre>React 18.2.0</pre>
              </div>
              <div className={s.iconWithDesc}>
                <SiTypescript size={80} color="#3178c6" />
                <pre>Typescript 5.0.4</pre>
              </div>
              <div className={s.iconWithDesc}>
                <SiEslint size={80} color="#8080f2" />
                <pre>ESLint 8.38.0</pre>
              </div>
            </div>
          </div>
          <div className={s.innerTools}>
            <h6>Тестирование</h6>
            <div className={s.iconWithDesc}>
              <SiTestinglibrary size={80} color="#c11e1d" />
              <pre>Testing Library 14.0.0</pre>
            </div>
            <div className={s.iconWithDesc}>
              <SiJest size={80} color="#9e5368" />
              <pre>Jest 29.5.0</pre>
            </div>
          </div>
          <div className={s.innerTools}>
            <h6>Визуализация компонентов</h6>
            <div className={s.iconWithDesc}>
              <SiStorybook size={80} color="#ff4785" />
              <pre>Storybook 7.0.4</pre>
            </div>
          </div>
          <div className={s.innerTools}>
            <h6>Навигация</h6>
            <div className={s.iconWithDesc} id="tools">
              <SiReactrouter size={80} color="#f44250" />
              <pre>React router 6.10.0</pre>
            </div>
          </div>
          <div className={s.innerTools}>
            <h6>State менеджер</h6>
            <div className={s.iconWithDesc}>
              <SiRedux size={80} color="#764abc" />
              <pre>Redux toolkit 1.9.3</pre>
            </div>
          </div>
        </div>
      </div>
      <VpButton className={s.controlButton} onClick={handleScrollWindowToUp}>
        <IoIosArrowUp size={20} />
      </VpButton>
      <Xarrow
        start="plans"
        end="tools"
        startAnchor="bottom"
        endAnchor="top"
        color="lightcoral"
        dashness
        headSize={4}
      />
    </div>
  );
};

export default AboutPageFour;
