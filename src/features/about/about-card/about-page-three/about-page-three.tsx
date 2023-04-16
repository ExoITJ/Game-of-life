import React, { FC } from 'react';
import s from './about-page-three.module.css';
import Xarrow, { Xwrapper } from 'react-xarrows';

const AboutPageThree: FC = () => {
  return (
    <div className={s.purposePlansBlock}>
      <div className={s.purpose} id="purpose">
        <span>Цель</span>
        <h6>
          Получить знания и навыки по разработке масштабируемых, легко
          поддерживаемых приложений с нуля. Также повысить свою квалификацию в
          данном направлении.
        </h6>
      </div>
      <div className={s.plans} id="plans">
        <span>Планы</span>
        <h6>
          На курс пришел с опытом продуктовой разработки, опыт был около
          полутора лет. С начала 2023 года веду свой проект в ходе разработки
          было ощущение, что чего-то не хватает, поэтому и пошел на курсы. Все
          поставленные мною цели, были в полной мере достигнуты.
        </h6>
      </div>
      <Xarrow
        start="purpose"
        end="plans"
        color="lightcoral"
        dashness
        headSize={4}
      />
    </div>
  );
};

export default AboutPageThree;
