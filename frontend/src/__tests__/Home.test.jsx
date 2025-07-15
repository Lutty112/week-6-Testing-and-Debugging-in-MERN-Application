import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { vi } from 'vitest';
import * as api from '../services/api';

// Mock API functions
vi.mock('../services/api', () => ({
  fetchBugs: vi.fn(() =>
    Promise.resolve({
      data: [
        { _id: '1', title: 'Bug One', status: 'open' },
        { _id: '2', title: 'Bug Two', status: 'resolved' },
      ],
    })
  ),
  createBug: vi.fn(() => Promise.resolve({})),
  deleteBug: vi.fn(() => Promise.resolve({})),
  updateBug: vi.fn(() => Promise.resolve({})),
}));

describe('Home integration test', () => {
  it('renders BugForm and BugList with real components', async () => {
    render(<Home />);

    // Check heading
    expect(screen.getByText(/Bug Tracker/i)).toBeInTheDocument();

    // Wait for bugs to load
    await waitFor(() => {
      expect(screen.getByText('Bug One')).toBeInTheDocument();
      expect(screen.getByText('Bug Two')).toBeInTheDocument();
    });

    // Type a new bug title
    const input = screen.getByPlaceholderText(/enter bug title/i);
    fireEvent.change(input, { target: { value: 'New Bug' } });

    // Submit form
    const button = screen.getByRole('button', { name: /report bug/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(api.createBug).toHaveBeenCalledWith({ title: 'New Bug' });
    });
  });
});
