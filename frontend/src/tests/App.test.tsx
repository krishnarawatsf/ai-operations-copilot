import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the product headline', async () => {
    render(<App />);
    expect(screen.getByText('AI Operations Copilot')).toBeInTheDocument();
    expect(await screen.findByText('Operational Intelligence')).toBeInTheDocument();
  });
});
