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
      "country": "US",
      "access": "all-access",
      "year": "2015",
      "month": "10",
      "day": "10",
          "articles": [
              {
                  "article": "Sample_Page_One",
                  "project":	"en.wikipedia",
                  "views_ceil": 12345,
                  "rank": 1
              },
              {
                  "article": "Sample_Page_Two",
                  "project":	"en.wikipedia",
                  "views_ceil": 23456,
                  "rank": 2
              }
          ]
      }
  ]    
}

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse)
    })
  );
});

describe('SearchBar Component', () => {
  const mockProps = {
    date: new Date(2021, 10, 10),
    resultCount: 50,
    country: "US",
    dataSetter: jest.fn(),
    dateSetter: jest.fn(),
    resultCountSetter: jest.fn(),
    countrySetter: jest.fn(),
    pageSetter: jest.fn()
  };

  test('renders mocked child components', () => {
    render(<SearchBar props={mockProps} />);
    expect(screen.getByTestId('mocked-date-picker')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-result-count-picker')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-country-picker')).toBeInTheDocument();
  });

  test('calls fetchData on search button click', async () => {
    render(<SearchBar props={mockProps} />);
    fireEvent.click(screen.getByText('Search'));
    expect(fetch).toHaveBeenCalled();
  });
});
