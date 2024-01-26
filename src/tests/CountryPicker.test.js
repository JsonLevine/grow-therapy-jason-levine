import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryPicker from '../components/CountryPicker';

describe('CountryPicker Component', () => {
  const mockSetter = jest.fn();

  afterEach(() => {
      jest.restoreAllMocks()
  });

  test('renders without crashing', () => {
    render(<CountryPicker setter={mockSetter}/>);
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });

  test('initializes with United States', () => {
    render(<CountryPicker setter={mockSetter}/>);
    let country = "US"
    expect(screen.getByLabelText(/country/i)).toHaveValue(country);
  });

  test('updates country on change', () => {
    render(<CountryPicker setter={mockSetter}/>);
    const selectElement = screen.getByLabelText(/country/i);
    fireEvent.change(selectElement, { target: { value: 'JP' } });
    expect(selectElement).toHaveValue('JP');
  });
});
