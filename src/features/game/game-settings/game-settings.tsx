import React, { ChangeEvent, FC, useRef } from 'react';
import s from './game-settings.module.css';
import VpButton from '../../../common/vp-button';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import {
  selectGameGeneration,
  selectGameNet,
  selectGameNetSize,
  selectGameSpeed,
} from '../game-selectors';
import {
  changeGameMode,
  changeGameNet,
  changeGameNetSize,
  changeGameSpeed,
  gameNextGeneration,
  increaseGameGeneration,
  resetGame,
} from '../game-slice';
import { GameModes, GameNetSizes } from '../game-types';
import VpSelector from '../../../common/vp-selector/vp-selector';

const GameSettings: FC = () => {
  const dispatch = useAppDispatch();
  const intervalRef = useRef<number>();

  const generation = useAppSelector(selectGameGeneration);
  const speed = useAppSelector(selectGameSpeed);
  const net = useAppSelector(selectGameNet);
  const netSize = useAppSelector(selectGameNetSize);

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

  const handleChangeNetSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    dispatch(changeGameNetSize(value as GameNetSizes));
  };

  const handleChangeGameSpeed = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch(changeGameSpeed(parseInt(value)));
  };

  return (
    <div className={s.gameSettings}>
      <div className={s.gameSettingsBlock}>
        <VpButton onClick={handleStartGame}>Старт</VpButton>
        <VpButton onClick={handleStop}>Стоп</VpButton>
        <VpButton onClick={handleReset}>Сброс</VpButton>
        <VpButton onClick={handleRandomNet}>Заполнить сетку</VpButton>
        <VpSelector
          value={netSize}
          onChange={handleChangeNetSize}
          label="Размер поля"
        >
          <option value={GameNetSizes.Small}>Малое</option>
          <option value={GameNetSizes.Medium}>Среднее</option>
          <option value={GameNetSizes.Large}>Большое</option>
        </VpSelector>
      </div>
      <div className={s.gameSettingsSpeedRangeInput}>
        <small>Меньше</small>
        <input
          max={500}
          min={50}
          step={1}
          type="range"
          value={speed}
          onChange={handleChangeGameSpeed}
        />
        <small>Больше</small>
      </div>

      <label className={s.gameSettingsGeneration}>{generation}</label>
    </div>
  );
};

export default GameSettings;
