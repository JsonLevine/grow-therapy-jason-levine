import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryPicker from '../components/CountryPicker';

describe('CountryPicker Component', () => {
  afterEach(() => {
      jest.restoreAllMocks()
  });

  test('renders without crashing', () => {
    render(<CountryPicker/>);
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });

  test('initializes with United States', () => {
    render(<CountryPicker/>);
    let country = "United States"
    expect(screen.getByLabelText(/country/i)).toHaveValue(country);
  });

  test('updates country on change', () => {
    render(<CountryPicker />);
    const selectElement = screen.getByLabelText(/country/i);
    fireEvent.change(selectElement, { target: { value: 'Japan' } });
    expect(selectElement).toHaveValue('Japan');
  });
});
