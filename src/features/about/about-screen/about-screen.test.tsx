import { renderWithProviders } from '../../../common/common-utils/tests/test-utils';
import { screen } from '@testing-library/react';
import AboutScreen from './about-screen';

describe('AboutScreen', () => {
  test('should render about screen', () => {
    renderWithProviders(<AboutScreen />);

    expect(screen.getByText(/OTUS React.JS Developer/)).toBeInTheDocument();
    expect(screen.getByText(/Conway's Game of Life/)).toBeInTheDocument();
    expect(screen.getByText(/Цель/)).toBeInTheDocument();
    expect(screen.getByText(/Написание\/проверка кода/)).toBeInTheDocument();
    expect(screen.getByText(/Тестирование/)).toBeInTheDocument();
    expect(screen.getByText(/Визуализация компонентов/)).toBeInTheDocument();
    expect(screen.getByText(/Навигация/)).toBeInTheDocument();
    expect(screen.getByText(/State менеджер/)).toBeInTheDocument();
  });
});
