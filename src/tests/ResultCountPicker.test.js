import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultCountPicker from '../components/ResultCountPicker';

describe('ResultCountPicker Component', () => {
  const mockSetter = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<ResultCountPicker setter={mockSetter} />);
    expect(screen.getByLabelText(/num results/i)).toBeInTheDocument();
  });

  test('initializes with 100 as the default value', () => {
    render(<ResultCountPicker setter={mockSetter} />);
    expect(screen.getByLabelText(/num results/i)).toHaveValue('100');
    expect(mockSetter).toHaveBeenCalledWith('100');
  });

  test('updates value on change and calls setter function', () => {
    render(<ResultCountPicker setter={mockSetter} />);
    const selectElement = screen.getByLabelText(/num results/i);
    fireEvent.change(selectElement, { target: { value: '50' } });
    expect(selectElement).toHaveValue('50');
    expect(mockSetter).toHaveBeenCalledWith('50');
  });

});
