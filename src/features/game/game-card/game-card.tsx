import React, { FC } from 'react';
import GameSettings from '../game-settings';
import GameNet from '../game-net';

const GameCard: FC = () => {
  return (
    <div>
      <GameSettings />
      <GameNet />
    </div>
  );
};

export default GameCard;
