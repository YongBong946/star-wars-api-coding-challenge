import { render } from '@testing-library/react';
import { LoadingContainer } from './LoadingContainer';

const mockProps = { message: 'test message' };

describe('LoadingContainer', () => {
  test('renders the LoadingContainer with the message supplied by the props', async () => {
    const { getByTestId } = render(<LoadingContainer {...mockProps} />);
    expect(getByTestId('loading-container')).toHaveTextContent(
      mockProps.message
    );
  });
});
