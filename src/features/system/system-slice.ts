import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthenticationData } from './system-types';
import { LocalStorageKeys } from '../../common/common-consts';

type SystemState = {
  version: string;
  isAuth: boolean;
  userName: string;
};

export const SYSTEM_INITIAL_STATE: SystemState = {
  version: '',
  isAuth: false,
  userName: '',
};

const systemSlice = createSlice({
  name: 'system',
  initialState: SYSTEM_INITIAL_STATE,
  reducers: {
    loadVersion: (state, { payload }: PayloadAction<string>) => {
      state.version = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, { payload }: PayloadAction<string>) => {
        state.isAuth = true;
        state.userName = payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
      });
  },
});

export const systemReducer = systemSlice.reducer;
export const { loadVersion } = systemSlice.actions;

export const login = createAsyncThunk(
  'system/login',
  async (data: AuthenticationData) => {
    const { name, password } = data;
    if (!!name && !!password) {
      localStorage.setItem(LocalStorageKeys.Authenticate, 'true');
      localStorage.setItem(LocalStorageKeys.UserName, name);
    }
    return name;
  }
);

export const logout = createAsyncThunk('system/logout', async () => {
  localStorage.clear();
});
