import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultCountPicker from '../components/ResultCountPicker';

describe('ResultCountPicker Component', () => {
  const mockSetter = jest.fn();

  test('renders without crashing', () => {
    render(<ResultCountPicker setter={mockSetter} />);
    expect(screen.getByTestId('result-count-picker')).toBeInTheDocument();
  });

  test('initializes with 100 as the default value', () => {
    render(<ResultCountPicker count="102" setter={mockSetter} />);
    const selectElement = screen.getByTestId('result-select');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('102');
  });
});
