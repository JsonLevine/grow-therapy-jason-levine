import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultList from '../components/ResultList';

describe('ResultList Component', () => {
  const mockResults = [
    { rank: 1, article: 'Page_One', views_ceil: 1000 },
    { rank: 2, article: 'Page_Two', views_ceil: 2000 }
  ];

  test('renders a list of ResultChip components for given results', () => {
    render(<ResultList results={mockResults} />);
    const resultChips = screen.getAllByTestId('result-chip');
    expect(resultChips.length).toBe(mockResults.length);
  });

  test('renders nothing when results is undefined or empty', () => {
    const { container } = render(<ResultList results={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
