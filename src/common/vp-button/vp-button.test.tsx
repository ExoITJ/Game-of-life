import { renderWithProviders } from '../common-utils/tests/test-utils';
import { screen } from '@testing-library/react';
import VpButton, { SPINNER_TEST_ID } from './vp-button';

const DATA_TEST_ID = 'test-button';

describe('VpButton', () => {
  test('should render button', () => {
    renderWithProviders(<VpButton data-testid={DATA_TEST_ID}>Тест</VpButton>);

    expect(screen.getByTestId(DATA_TEST_ID)).toBeInTheDocument();
  });

  test('should render button with loading spinner', () => {
    renderWithProviders(<VpButton loading>Тест</VpButton>);

    expect(screen.getByTestId(SPINNER_TEST_ID)).toBeInTheDocument();
  });
});
