import { renderWithProviders } from '../../../common/common-utils/tests/test-utils';
import { screen } from '@testing-library/react';
import RulesScreen from './rules-screen';

describe('RulesCard', () => {
  test('should render component', () => {
    renderWithProviders(<RulesScreen />);

    expect(screen.getByText(/Правила/)).toBeInTheDocument();
    expect(
      screen.getByText(/Игра прекращается в следующих случаях/)
    ).toBeInTheDocument();
  });
});
