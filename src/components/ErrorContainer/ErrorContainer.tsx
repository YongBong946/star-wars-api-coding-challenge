import React from 'react';
import {
  StyledErrorContainer,
  StyledErrorMessage
} from './ErrorContainer.style';

export interface ErrorContainerProps {
  message: string;
}

export const ErrorContainer: React.FunctionComponent<ErrorContainerProps> = (
  props
) => {
  const { message } = props;
  return (
    <StyledErrorContainer>
      <StyledErrorMessage role='alert'>{message}</StyledErrorMessage>
    </StyledErrorContainer>
  );
};
