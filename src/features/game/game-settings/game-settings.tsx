import React, { FC, useRef } from 'react';
import s from './game-settings.module.css';
import VpButton from '@/common/vp-button';
import { useAppDispatch, useAppSelector } from '@/app/store';
import {
  selectGameGeneration,
  selectGameNet,
  selectGameSpeed,
} from '../game-selectors';
import {
  changeGameMode,
  changeGameNet,
  gameNextGeneration,
  increaseGameGeneration,
  resetGame,
} from '../game-slice';
import { GameModes } from '../game-types';

const GameSettings: FC = () => {
  const dispatch = useAppDispatch();
  const intervalRef = useRef<number>();

  const generation = useAppSelector(selectGameGeneration);
  const speed = useAppSelector(selectGameSpeed);
  const net = useAppSelector(selectGameNet);

  const gameIsOn = () => {
    dispatch(gameNextGeneration());
    dispatch(increaseGameGeneration(1));
  };

  const handleStartGame = () => {
    clearInterval(intervalRef.current);
    dispatch(changeGameMode(GameModes.Start));
    intervalRef.current = window.setInterval(gameIsOn, speed);
  };

  const handleStop = () => {
    dispatch(changeGameMode(GameModes.Pause));
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    dispatch(resetGame());
    clearInterval(intervalRef.current);
  };

  const handleRandomNet = () => {
    const newNet = net.map((rowArr) =>
      rowArr.map(() => Math.floor(Math.random() * 4) === 1)
    );
    dispatch(changeGameNet(newNet));
  };

  return (
    <div className={s.gameSettings}>
      <div className={s.gameSettingsBlock}>
        <VpButton onClick={handleStartGame}>Старт</VpButton>
        <VpButton onClick={handleStop}>Стоп</VpButton>
        <VpButton onClick={handleReset}>Сброс</VpButton>
        <VpButton onClick={handleRandomNet}>Заполнить сетку</VpButton>
      </div>
      <label className={s.gameSettingsGeneration}>{generation}</label>
    </div>
  );
};

export default GameSettings;
