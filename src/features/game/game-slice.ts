import { calculateNewNet } from '../../common/common-utils/game';
import {
  DEFAULT_XAXIS,
  DEFAULT_YAXIS,
  GAME_FIELD_SIZES_INFO,
  GameModes,
  GameNetSizes,
  NetElement,
} from './game-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash/cloneDeep';

type GameState = {
  net: boolean[][];
  mode: GameModes;
  netSize: GameNetSizes;
  speed: number;
  generation: number;
};

export const GAME_INITIAL_STATE: GameState = {
  net: calculateNewNet(DEFAULT_XAXIS, DEFAULT_YAXIS),
  mode: GameModes.Pause,
  netSize: GameNetSizes.Small,
  speed: 250,
  generation: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: GAME_INITIAL_STATE,
  reducers: {
    resetGame: () => GAME_INITIAL_STATE,
    gameNextGeneration: (state) => {
      if (state.mode === GameModes.Start) {
        const storeNet = state.net;
        const netClone = cloneDeep(state.net);

        const xAxis = GAME_FIELD_SIZES_INFO[state.netSize].x;
        const yAxis = GAME_FIELD_SIZES_INFO[state.netSize].y;

        for (let i = 0; i < xAxis; i++) {
          for (let j = 0; j < yAxis; j++) {
            let count = 0;
            if (i > 0) if (storeNet[i - 1][j]) count++;
            if (i > 0 && j > 0) if (storeNet[i - 1][j - 1]) count++;
            if (i > 0 && j < yAxis - 1) if (storeNet[i - 1][j + 1]) count++;
            if (j < yAxis - 1) if (storeNet[i][j + 1]) count++;
            if (j > 0) if (storeNet[i][j - 1]) count++;
            if (i < xAxis - 1) if (storeNet[i + 1][j]) count++;
            if (i < xAxis - 1 && j > 0) if (storeNet[i + 1][j - 1]) count++;
            if (i < xAxis - 1 && yAxis - 1) if (storeNet[i + 1][j + 1]) count++;
            if (storeNet[i][j] && (count < 2 || count > 3))
              netClone[i][j] = false;
            if (!storeNet[i][j] && count === 3) netClone[i][j] = true;
          }
        }

        state.net = netClone;
      }
    },
    changeGameMode: (state, { payload }: PayloadAction<GameModes>) => {
      state.mode = payload;
    },
    changeGameNetSize: (state, { payload }: PayloadAction<GameNetSizes>) => {
      state.mode = GameModes.Pause;
      state.generation = 0;
      state.netSize = payload;
      const xAxis = GAME_FIELD_SIZES_INFO[payload].x;
      const yAxis = GAME_FIELD_SIZES_INFO[payload].y;
      state.net = calculateNewNet(xAxis, yAxis);
    },
    changeGameSpeed: (state, { payload }: PayloadAction<number>) => {
      state.speed = payload;
    },
    increaseGameGeneration: (state, { payload }: PayloadAction<number>) => {
      if (!payload) {
        state.generation = payload;
        return;
      }
      state.generation += payload;
    },
    changeGameNet: (state, { payload }: PayloadAction<boolean[][]>) => {
      state.net = payload;
    },
    selectGameNetElement: (state, { payload }: PayloadAction<NetElement>) => {
      const { x, y } = payload;
      const newNet = [...state.net];
      newNet[x][y] = !state.net[x][y];
      state.net = newNet;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  resetGame,
  gameNextGeneration,
  changeGameMode,
  changeGameNetSize,
  changeGameSpeed,
  increaseGameGeneration,
  changeGameNet,
  selectGameNetElement,
} = gameSlice.actions;
