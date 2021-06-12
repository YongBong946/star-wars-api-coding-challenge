import { render } from '@testing-library/react';
import { ErrorContainer } from './ErrorContainer';

const mockProps = { message: 'test message' };

describe('ErrorContainer', () => {
  test('renders the ErrorContainer with the message supplied by the props', () => {
    const { getByRole } = render(<ErrorContainer {...mockProps} />);
    expect(getByRole('alert')).toHaveTextContent(mockProps.message);
  });
});
