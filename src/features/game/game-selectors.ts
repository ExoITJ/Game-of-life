import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { GAME_FIELD_SIZES_INFO } from './game-types';

const selectGameState = (state: RootState) => state.game;

export const selectGameMode = createSelector(
  [selectGameState],
  ({ mode }) => mode
);
export const selectGameNetSize = createSelector(
  [selectGameState],
  ({ netSize }) => netSize
);
export const selectGameNetXAxis = createSelector(
  [selectGameNetSize],
  (netSize) => GAME_FIELD_SIZES_INFO[netSize].x
);
export const selectGameNetYAxis = createSelector(
  [selectGameNetSize],
  (netSize) => GAME_FIELD_SIZES_INFO[netSize].y
);
export const selectGameSpeed = createSelector(
  [selectGameState],
  ({ speed }) => speed
);
export const selectGameNet = createSelector(
  [selectGameState],
  ({ net }) => net
);
export const selectGameGeneration = createSelector(
  [selectGameState],
  ({ generation }) => generation
);
