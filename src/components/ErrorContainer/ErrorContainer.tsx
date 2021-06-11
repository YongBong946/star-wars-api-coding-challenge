import React from 'react';

export interface ErrorContainerProps {
  message: string;
}

export const ErrorContainer: React.FunctionComponent<ErrorContainerProps> = (
  props
) => {
  const { message } = props;
  return <p data-testid='error-container'>{message}</p>;
};
