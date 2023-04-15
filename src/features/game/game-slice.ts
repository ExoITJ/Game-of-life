import { calculateNewNet } from '@/common/common-utils/game';
import {
  DEFAULT_XAXIS,
  DEFAULT_YAXIS,
  GAME_FIELD_SIZES_INFO,
  GameModes,
  GameNetSizes,
  GameSpeeds,
} from './game-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type GameState = {
  net: boolean[][];
  mode: GameModes;
  netSize: GameNetSizes;
  speed: GameSpeeds;
  generation: number;
};

export const GAME_INITIALS_STATE: GameState = {
  net: calculateNewNet(DEFAULT_XAXIS, DEFAULT_YAXIS),
  mode: GameModes.Pause,
  netSize: GameNetSizes.Small,
  speed: GameSpeeds.OneX,
  generation: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: GAME_INITIALS_STATE,
  reducers: {
    resetGame: () => GAME_INITIALS_STATE,
    gameNextGeneration: (state) => {
      if (state.mode === GameModes.Start) {
        const newNet = state.net;
        const xAxis = GAME_FIELD_SIZES_INFO[state.netSize].x;
        const yAxis = GAME_FIELD_SIZES_INFO[state.netSize].y;

        for (let i = 0; i < xAxis; i++) {
          for (let j = 0; j < yAxis; j++) {
            let count = 0;
            if (i > 0) if (state.net[i - 1][j]) count++;
            if (i > 0 && j > 0) if (state.net[i - 1][j - 1]) count++;
            if (i > 0 && j < yAxis - 1) if (state.net[i - 1][j + 1]) count++;
            if (j < yAxis - 1) if (state.net[i][j + 1]) count++;
            if (j > 0) if (state.net[i][j - 1]) count++;
            if (i < xAxis - 1) if (state.net[i + 1][j]) count++;
            if (i < xAxis - 1 && j > 0) if (state.net[i + 1][j - 1]) count++;
            if (i < xAxis - 1 && yAxis - 1)
              if (state.net[i + 1][j + 1]) count++;
            if (state.net[i][j] && (count < 2 || count > 3))
              newNet[i][j] = false;
            if (!state.net[i][j] && count === 3) newNet[i][j] = true;
          }
        }
        state.net = newNet;
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
    changeGameSpeed: (state, { payload }: PayloadAction<GameSpeeds>) => {
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
} = gameSlice.actions;
