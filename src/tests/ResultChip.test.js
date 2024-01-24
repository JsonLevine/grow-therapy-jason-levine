import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultChip from '../components/ResultChip';

describe('ResultChip Component', () => {
  const mockPage = {
    rank: 1,
    article: 'Example_Page',
    views: 123456
  };

  test('renders page information correctly', () => {
    render(<ResultChip page={mockPage} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Example Page')).toBeInTheDocument();
    expect(screen.getByText('123,456 views')).toBeInTheDocument();
  });
});
