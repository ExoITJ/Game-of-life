import { combineReducers } from '@reduxjs/toolkit';
import { systemReducer } from '../features/system/system-slice';

export const rootReducer = combineReducers({
  system: systemReducer,
});
