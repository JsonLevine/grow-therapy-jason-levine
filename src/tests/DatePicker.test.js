import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DatePicker from '../components/DatePicker';

describe('DatePicker Component', () => {
  const mockSetter = jest.fn();
  
  beforeEach(() => {
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));
  });

  afterEach(() => {
      jest.restoreAllMocks()
  });

  test('renders without crashing', () => {
    render(<DatePicker setter={mockSetter} />);
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  });

  test('initializes with mocked date', () => {
    const testDate = new Date(2020, 1, 1)
    render(<DatePicker value={testDate} setter={mockSetter} />);
    expect(screen.getByTestId('date-picker')).toBeInTheDocument()
  });

  test('updates date on change', () => {
    render(<DatePicker setter={mockSetter} />);
    const datePicker = screen.getByLabelText(/date/i);
    const newDate = new Date();
    fireEvent.change(datePicker, { target: { value: newDate } });
    expect(mockSetter).toHaveBeenCalledWith(newDate);
  });
});
