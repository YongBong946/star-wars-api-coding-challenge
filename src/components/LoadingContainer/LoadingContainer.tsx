import React from 'react';
import { StyledLoadingContainer } from './LoadingContainer.style';

export interface LoadingContainerProps {
  message: string;
}

export const LoadingContainer: React.FunctionComponent<LoadingContainerProps> =
  (props) => {
    const { message } = props;
    return (
      <StyledLoadingContainer>
        <p role='status'>{message}</p>
      </StyledLoadingContainer>
    );
  };
