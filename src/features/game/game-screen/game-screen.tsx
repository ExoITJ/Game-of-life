import React, { FC } from 'react';
import c from '../../../styles/common.module.css';
import { Helmet } from 'react-helmet-async';
import GameCard from '../game-card';

const GameScreen: FC = () => (
  <div className={c.fluidContainer}>
    <Helmet>
      <title>Игра</title>
    </Helmet>
    <GameCard />
  </div>
);

export default GameScreen;
