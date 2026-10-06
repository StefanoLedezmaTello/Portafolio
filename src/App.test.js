import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// The particle renderer needs WebGL; keep the app's real content and interactions.
jest.mock('./components/particulas', () => () => null);

test('renders portfolio identity and GitHub destination', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Stefano Ledezma' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href', 'https://github.com/StefanoLedezmaTello'
  );
});

test('opens the CV preview', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Ver CV' }));
  expect(screen.getByText('Vista previa CV')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Cerrar' }));
  expect(screen.queryByText('Vista previa CV')).not.toBeInTheDocument();
});
