import { getByRole, screen } from '@testing-library/react';
import VpInput from './vp-input';
import { renderWithProviders } from '../common-utils/tests/test-utils';
import { ValidationErrors } from '../common-consts';

const DATA_TEST_ID = 'test-input';

describe('VpInput', () => {
  test('should render input', () => {
    renderWithProviders(
      <VpInput value="test" onChange={() => {}} data-testid={DATA_TEST_ID} />
    );

    expect(screen.getByTestId(DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(DATA_TEST_ID)).toHaveValue('test');
  });

  test('should render input with label', () => {
    renderWithProviders(
      <VpInput value="test" onChange={() => {}} label="Логин" />
    );

    expect(screen.getByText(/Логин/)).toBeInTheDocument();
  });

  test('should render input with error message', () => {
    renderWithProviders(
      <VpInput
        value="test"
        onChange={() => {}}
        error={ValidationErrors.FieldRequired}
      />
    );

    expect(
      screen.getByText(ValidationErrors.FieldRequired)
    ).toBeInTheDocument();
  });
});
