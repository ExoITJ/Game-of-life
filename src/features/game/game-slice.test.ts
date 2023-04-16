import { createAppStore } from '../../app/store';
import { GameModes, GameNetSizes } from './game-types';
import {
  GAME_INITIAL_STATE,
  changeGameMode,
  changeGameNet,
  changeGameNetSize,
  changeGameSpeed,
  increaseGameGeneration,
  resetGame,
  selectGameNetElement,
} from './game-slice';

describe('GameSlice', () => {
  test('resetGame', () => {
    const initState = {
      net: [],
      mode: GameModes.Start,
      netSize: GameNetSizes.Large,
      speed: 500,
      generation: 1000,
    };
    const store = createAppStore({ game: initState });

    store.dispatch(resetGame());

    expect(store.getState().game).toBe(GAME_INITIAL_STATE);
  });

  test('changeGameMode', () => {
    const initState = { ...GAME_INITIAL_STATE, mode: GameModes.Start };
    const store = createAppStore({ game: initState });

    store.dispatch(changeGameMode(GameModes.Pause));

    expect(store.getState().game.mode).toBe(GameModes.Pause);
  });

  test('changeGameNetSize', () => {
    const initState = GAME_INITIAL_STATE;
    const store = createAppStore({ game: initState });

    store.dispatch(changeGameNetSize(GameNetSizes.Large));

    expect(store.getState().game.netSize).toBe(GameNetSizes.Large);
  });

  test('changeGameSpeed', () => {
    const initState = GAME_INITIAL_STATE;
    const store = createAppStore({ game: initState });

    store.dispatch(changeGameSpeed(500));

    expect(store.getState().game.speed).toBe(500);
  });

  test('increaseGameGeneration', () => {
    const initState = GAME_INITIAL_STATE;
    const store = createAppStore({ game: initState });

    store.dispatch(increaseGameGeneration(100));

    expect(store.getState().game.generation).toBe(100);

    store.dispatch(increaseGameGeneration(0));

    expect(store.getState().game.generation).toBe(0);
  });

  test('changeGameNet', () => {
    const testNet: boolean[][] = [];
    const initState = GAME_INITIAL_STATE;
    const store = createAppStore({ game: initState });

    store.dispatch(changeGameNet(testNet));

    expect(store.getState().game.net).toBe(testNet);
  });

  test('selectGameNetElement', () => {
    const initState = GAME_INITIAL_STATE;
    const xAxis = 1;
    const yAxis = 1;
    const store = createAppStore({ game: initState });

    store.dispatch(selectGameNetElement({ x: 1, y: 1 }));

    expect(store.getState().game.net[xAxis][yAxis]).toBeTruthy();
  });
});
