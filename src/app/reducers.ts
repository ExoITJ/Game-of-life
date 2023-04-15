import { combineReducers } from '@reduxjs/toolkit';
import { systemReducer } from '../features/system/system-slice';
import { gameReducer } from '../features/game/game-slice';

export const rootReducer = combineReducers({
  system: systemReducer,
  game: gameReducer,
});
