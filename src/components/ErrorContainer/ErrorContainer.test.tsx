import { render } from '@testing-library/react';
import { ErrorContainer } from './ErrorContainer';

const mockProps = { message: 'test message' };

describe('ErrorContainer', () => {
  test('renders the ErrorContainer with the message supplied by the props', async () => {
    const { getByTestId } = render(<ErrorContainer {...mockProps} />);
    expect(getByTestId('error-container')).toHaveTextContent(mockProps.message);
  });
});
