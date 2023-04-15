import React, { FC } from 'react';
import s from './game-net.module.css';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { selectGameNet, selectGameNetYAxis } from '../game-selectors';
import clsx from 'clsx';
import { selectGameNetElement } from '../game-slice';

const ELEMENT_SIZE = 14;

const GameNet: FC = () => {
  const dispatch = useAppDispatch();

  const net = useAppSelector(selectGameNet);
  const netYAxis = useAppSelector(selectGameNetYAxis);
  const width = netYAxis * ELEMENT_SIZE;

  const handlePickElement = (x: number, y: number) => {
    dispatch(selectGameNetElement({ x, y }));
  };

  return (
    <div className={s.gameNet}>
      <div className={s.net} style={{ width }}>
        {net.map((rowArr, rowIdx, arr) =>
          rowArr.map((_, colIdx) => {
            const id = `${rowIdx}_${colIdx}`;
            return (
              <div
                key={id}
                id={id}
                onClick={() => handlePickElement(rowIdx, colIdx)}
                className={clsx(
                  s.element,
                  arr[rowIdx][colIdx] ? s.aliveElement : s.diedElement
                )}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default GameNet;
