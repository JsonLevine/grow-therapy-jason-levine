import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';

jest.mock('../components/DatePicker', () => () => <div data-testid="mocked-date-picker" />);
jest.mock('../components/ResultCountPicker', () => () => <div data-testid="mocked-result-count-picker" />);
jest.mock('../components/CountryPicker', () => () => <div data-testid="mocked-country-picker" />);

const mockResponse = {
    "items": [
        {
        "project": "en.wikipedia",
        "access": "all-access",
        "year": "2015",
        "month": "10",
        "day": "10",
            "articles": [
                {
                    "article": "Sample_Page_One",
                    "views": 12345,
                    "rank": 1
                },
                {
                    "article": "Sample_Page_Two",
                    "views": 23456,
                    "rank": 2
                }
            ]
        }
    ]    
}

global.fetch =  jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockResponse)
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

  test('calls fetchData on search button click', () => {
    render(<SearchBar setter={mockSetter} />);
    fireEvent.click(screen.getByText('Search'));
    expect(fetch).toHaveBeenCalled();
  });
});
