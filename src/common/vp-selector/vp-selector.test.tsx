import { renderWithProviders } from '../common-utils/tests/test-utils';
import { screen } from '@testing-library/react';
import VpSelector from './vp-selector';

const TEST_OPTIONS = (
  <>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </>
);

const DATA_TEST_ID = 'test-select';

describe('VpSelector', () => {
  test('should render select', () => {
    renderWithProviders(
      <VpSelector value="1" onChange={() => {}} data-testid={DATA_TEST_ID}>
        {TEST_OPTIONS}
      </VpSelector>
    );

    expect(screen.getByTestId(DATA_TEST_ID)).toBeInTheDocument();
  });

  test('should render select with label', () => {
    renderWithProviders(
      <VpSelector value="1" onChange={() => {}} label="Выберите значение">
        {TEST_OPTIONS}
      </VpSelector>
    );

    expect(screen.getByText('Выберите значение')).toBeInTheDocument();
  });

  test('should render select with error', () => {
    renderWithProviders(
      <VpSelector value="1" onChange={() => {}} error="Значение не выбрано">
        {TEST_OPTIONS}
      </VpSelector>
    );

    expect(screen.getByText('Значение не выбрано')).toBeInTheDocument();
  });
});
