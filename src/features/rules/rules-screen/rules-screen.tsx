import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import RulesCard from '../rules-card';
import c from '../../../styles/common.module.css';

const RulesScreen: FC = () => {
  return (
    <div className={c.fluidContainer}>
      <Helmet>
        <title>Правила игры</title>
      </Helmet>
      <RulesCard />
    </div>
  );
};

export default RulesScreen;
