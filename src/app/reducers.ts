import { systemReducer } from '@/features/system/system-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  system: systemReducer,
});
