import { renderWithProviders } from '../../../common/common-utils/tests/test-utils';
import { screen } from '@testing-library/react';
import GameScreen from './game-screen';
import { GameSettingsDataTestIds } from '../game.utils';
import { createAppStore } from '../../../app/store';
import { GAME_INITIAL_STATE } from '../game-slice';
import userEvent from '@testing-library/user-event';
import {
  DEFAULT_XAXIS,
  DEFAULT_YAXIS,
  GameModes,
  GameNetSizes,
} from '../game-types';
import { calculateNewNet } from '../../../common/common-utils/game';

describe('GameScreen', () => {
  test('should render component', () => {
    renderWithProviders(<GameScreen />);

    const startGameButton = screen.getByTestId(
      GameSettingsDataTestIds.StartButton
    );
    const stopGameButton = screen.getByTestId(
      GameSettingsDataTestIds.StopButton
    );
    const resetGameButton = screen.getByTestId(
      GameSettingsDataTestIds.ResetButton
    );
    const randomNetButton = screen.getByTestId(
      GameSettingsDataTestIds.RandomNetButton
    );
    const netSizeSelect = screen.getByTestId(GameSettingsDataTestIds.Select);
    const generation = screen.getByTestId(
      GameSettingsDataTestIds.GenerationLabel
    );

    expect(startGameButton).toBeInTheDocument();
    expect(stopGameButton).toBeInTheDocument();
    expect(resetGameButton).toBeInTheDocument();
    expect(randomNetButton).toBeInTheDocument();
    expect(netSizeSelect).toBeInTheDocument();
    expect(generation).toBeInTheDocument();
  });

  test('handleStartGame', async () => {
    const initState = GAME_INITIAL_STATE;
    const store = createAppStore({ game: initState });
    renderWithProviders(<GameScreen />, { store });
    const startGameButton = screen.getByTestId(
      GameSettingsDataTestIds.StartButton
    );

    await userEvent.click(startGameButton);

    expect(store.getState().game.mode).toBe(GameModes.Start);
  });

  test('handleStop', async () => {
    const initState = { ...GAME_INITIAL_STATE, mode: GameModes.Start };
    const store = createAppStore({ game: initState });
    renderWithProviders(<GameScreen />, { store });
    const stopGameButton = screen.getByTestId(
      GameSettingsDataTestIds.StopButton
    );

    await userEvent.click(stopGameButton);

    expect(store.getState().game.mode).toBe(GameModes.Pause);
  });

  test('handleReset', async () => {
    const initState = { ...GAME_INITIAL_STATE, mode: GameModes.Start };
    const store = createAppStore({ game: initState });
    renderWithProviders(<GameScreen />, { store });
    const resetGameButton = screen.getByTestId(
      GameSettingsDataTestIds.ResetButton
    );

    await userEvent.click(resetGameButton);

    expect(store.getState().game.mode).toBe(GameModes.Pause);
  });

  test('handleRandomNet', async () => {
    const net = calculateNewNet(DEFAULT_XAXIS, DEFAULT_YAXIS);
    const initState = { ...GAME_INITIAL_STATE, net };
    const store = createAppStore({ game: initState });
    renderWithProviders(<GameScreen />, { store });
    const randomNetButton = screen.getByTestId(
      GameSettingsDataTestIds.RandomNetButton
    );

    await userEvent.click(randomNetButton);

    expect(store.getState().game.net).not.toBe(net);
  });

  test('handleChangeNetSize', async () => {
    const initState = GAME_INITIAL_STATE;
    const store = createAppStore({ game: initState });
    renderWithProviders(<GameScreen />, { store });
    const netSizeSelect = screen.getByTestId(GameSettingsDataTestIds.Select);

    await userEvent.selectOptions(netSizeSelect, GameNetSizes.Large);

    expect(store.getState().game.netSize).toBe(GameNetSizes.Large);
  });
});
