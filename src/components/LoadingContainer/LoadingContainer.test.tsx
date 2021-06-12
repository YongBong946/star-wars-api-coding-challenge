import { render } from '@testing-library/react';
import { LoadingContainer } from './LoadingContainer';

const mockProps = { message: 'test message' };

describe('LoadingContainer', () => {
  test('renders the LoadingContainer with the message supplied by the props', () => {
    const { getByRole } = render(<LoadingContainer {...mockProps} />);
    expect(getByRole('status')).toHaveTextContent(mockProps.message);
  });
});
