import { renderWithProviders } from '../common/common-utils/tests/test-utils';
import { act, screen } from '@testing-library/react';
import App from './app';
import { createAppStore } from './store';
import { LocalStorageKeys } from '../common/common-consts';
import { AppHeaderDataTestIds } from '../common/app-header/app-header.utils';
import { SYSTEM_INITIAL_STATE } from '../features/system/system-slice';
import { LoginPageDataTestIds } from '../common/pages/login-page/login-page.utils';
import { getStateFromLocalStorage } from '../common/common-utils';

describe('App', () => {
  test('should render main page', async () => {
    localStorage.setItem(LocalStorageKeys.UserName, 'admin');
    localStorage.setItem(LocalStorageKeys.Authenticate, 'true');
    const state = getStateFromLocalStorage();
    const store = createAppStore(state);
    renderWithProviders(<App />, { store });

    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 2000))
    );

    expect(
      screen.getByTestId(AppHeaderDataTestIds.UserNameLabel)
    ).toHaveTextContent('admin');
  });

  test('should render login page', async () => {
    const store = createAppStore({ system: SYSTEM_INITIAL_STATE });
    renderWithProviders(<App />, { store });

    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 2000))
    );

    expect(
      screen.getByTestId(LoginPageDataTestIds.LoginInput)
    ).toBeInTheDocument();
  });
});
