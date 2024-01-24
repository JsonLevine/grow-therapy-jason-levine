import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';

jest.mock('../components/DatePicker', () => () => <div data-testid="mocked-date-picker" />);
jest.mock('../components/ResultCountPicker', () => () => <div data-testid="mocked-result-count-picker" />);
jest.mock('../components/CountryPicker', () => () => <div data-testid="mocked-country-picker" />);

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ items: [{ articles: [] }] })
}));

describe('SearchBar Component', () => {
  const mockSetter = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders mocked child components', () => {
    render(<SearchBar setter={mockSetter} />);
    expect(screen.getByTestId('mocked-date-picker')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-result-count-picker')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-country-picker')).toBeInTheDocument();
  });

  test('calls fetchData on search button click', async () => {
    render(<SearchBar setter={mockSetter} />);
    await fireEvent.click(screen.getByText('Search'));
    expect(fetch).toHaveBeenCalled();
  });

});
