import { createAppStore } from '../../app/store';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../common-utils/tests/test-utils';
import AppHeader from './app-header';
import { AppHeaderDataTestIds } from './app-header.utils';

describe('AppHeader', () => {
  test('should render app header', () => {
    renderWithProviders(<AppHeader />);

    const gameButton = screen.getByTestId(AppHeaderDataTestIds.GameButtonLink);
    const rulesButton = screen.getByTestId(
      AppHeaderDataTestIds.RulesButtonLink
    );
    const aboutButton = screen.getByTestId(
      AppHeaderDataTestIds.AboutButtonLink
    );
    const logoutButton = screen.getByTestId(AppHeaderDataTestIds.LogoutButton);
    const userNameLabel = screen.getByTestId(
      AppHeaderDataTestIds.UserNameLabel
    );

    expect(gameButton).toBeInTheDocument();
    expect(rulesButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(userNameLabel).toBeInTheDocument();
  });

  test('should render user name', () => {
    const initState = {
      version: '',
      isAuth: true,
      userName: 'admin',
    };
    const store = createAppStore({ system: initState });
    renderWithProviders(<AppHeader />, { store });

    const userNameLabel = screen.getByTestId(
      AppHeaderDataTestIds.UserNameLabel
    );

    expect(userNameLabel).toHaveTextContent('admin');
  });

  test('should logout after click button', async () => {
    const initState = {
      version: '',
      isAuth: true,
      userName: 'admin',
    };
    const store = createAppStore({ system: initState });
    renderWithProviders(<AppHeader />, { store });

    const logoutButton = screen.getByTestId(AppHeaderDataTestIds.LogoutButton);
    await userEvent.click(logoutButton);

    expect(store.getState().system.isAuth).toBeFalsy();
    expect(store.getState().system.userName).toBe('');
  });
});
