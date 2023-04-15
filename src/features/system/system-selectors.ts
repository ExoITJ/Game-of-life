import { RootState } from '@/app/store';
import { createSelector } from '@reduxjs/toolkit';

const selectSystemState = (state: RootState) => state.system;

export const selectVersion = createSelector(
  [selectSystemState],
  ({ version }) => version
);

export const selectIsLogin = createSelector(
  [selectSystemState],
  ({ isAuth }) => isAuth
);

export const selectUserName = createSelector(
  [selectSystemState],
  ({ userName }) => userName
);
