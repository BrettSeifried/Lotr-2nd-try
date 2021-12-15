import { render, screen } from '@testing-library/react';
import BookList from './App';

test('renders BookList', () => {
  render(<BookList />);
  const linkElement = screen.getByText(/Home Base/i);
  expect(linkElement).toBeInTheDocument();
});
