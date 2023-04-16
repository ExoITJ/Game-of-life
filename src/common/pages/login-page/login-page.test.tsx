import { renderWithProviders } from '../../../common/common-utils/tests/test-utils';
import { screen } from '@testing-library/react';
import LoginPage from './login-page';
import { LoginPageDataTestIds } from './login-page.utils';
import userEvent from '@testing-library/user-event';
import { ValidationErrors } from '../../../common/common-consts';
import { createAppStore } from '../../../app/store';
import { SYSTEM_INITIAL_STATE } from '../../../features/system/system-slice';
import { SPINNER_TEST_ID } from '../../../common/vp-button/vp-button';
import { act } from 'react-dom/test-utils';

describe('LoginPage', () => {
  test('should render login page', () => {
    renderWithProviders(<LoginPage />);

    const loginInput = screen.getByTestId(LoginPageDataTestIds.LoginInput);
    const passwordInput = screen.getByTestId(
      LoginPageDataTestIds.PasswordInput
    );
    const submitButton = screen.getByTestId(LoginPageDataTestIds.SubmitButton);

    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('should return validation errors on inputs', async () => {
    renderWithProviders(<LoginPage />);

    const submitButton = screen.getByTestId(LoginPageDataTestIds.SubmitButton);
    await userEvent.click(submitButton);

    expect(screen.getAllByText(ValidationErrors.FieldRequired)).toHaveLength(2);
  });

  test('should auth after click button', async () => {
    const store = createAppStore({ system: SYSTEM_INITIAL_STATE });
    renderWithProviders(<LoginPage />, { store });

    const loginInput = screen.getByTestId(LoginPageDataTestIds.LoginInput);
    const passwordInput = screen.getByTestId(
      LoginPageDataTestIds.PasswordInput
    );
    await userEvent.type(loginInput, 'admin');
    await userEvent.type(passwordInput, 'admin');

    expect(loginInput).toHaveValue('admin');
    expect(passwordInput).toHaveValue('admin');

    const submitButton = screen.getByTestId(LoginPageDataTestIds.SubmitButton);
    await userEvent.click(submitButton);

    expect(screen.getByTestId(SPINNER_TEST_ID)).toBeInTheDocument();
    await act(
      async () => await new Promise((resolve) => setTimeout(resolve, 2000))
    );
    expect(store.getState().system.isAuth).toBeTruthy();
    expect(store.getState().system.userName).toBe('admin');
  });
});
