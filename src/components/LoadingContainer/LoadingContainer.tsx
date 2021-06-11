import React from 'react';

export interface LoadingContainerProps {
  message: string;
}

export const LoadingContainer: React.FunctionComponent<LoadingContainerProps> =
  (props) => {
    const { message } = props;
    return <p data-testid='loading-container'>{message}</p>;
  };
