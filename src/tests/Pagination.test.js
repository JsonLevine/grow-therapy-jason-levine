import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../components/Pagination';

describe('Pagination Component', () => {
  const mockPullPage = jest.fn();

  test('renders pagination component when total posts are provided', () => {
    render(<Pagination articlesPerPage={10} totalPosts={50} pull_page={mockPullPage} />);
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  test('does not render when no posts are provided', () => {
    const { container } = render(<Pagination articlesPerPage={10} totalPosts={0} pull_page={mockPullPage} />);
    expect(container.firstChild).toBeNull();
  });

  test('calls pull_page function with correct page number on page change', () => {
    render(<Pagination articlesPerPage={10} totalPosts={50} pull_page={mockPullPage} />);
    fireEvent.click(screen.getByText('>'));
    expect(mockPullPage).toHaveBeenCalledWith(2);
  });
});
