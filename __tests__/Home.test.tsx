import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

test('renders homepage', () => {
  render(<Home />);
  expect(screen.getByText('Hello from Jamstack Next.js!')).toBeInTheDocument();
});
