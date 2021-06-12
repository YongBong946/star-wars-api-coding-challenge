import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { StarWarsApiEndpoints } from './typings/enums';
import { VotingTable } from './components/VotingTable/VotingTable';
import { starwarsApiUrl } from './typings/constants';
import { LoadingContainer } from './components/LoadingContainer/LoadingContainer';
import { ErrorContainer } from './components/ErrorContainer/ErrorContainer';
import { IStarWarsApiDataDto } from './typings/types';
import { getFilmTitleAndReleaseDate } from './services/DataTransformationService/DataTransformationService';
import { StyledHeaderContainer, StyledBodyContainer } from './App.style';

export default function App(): ReactElement {
  const [starWarsData, setStarWarsData] =
    useState<IStarWarsApiDataDto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!starWarsData) {
      setIsLoading(true);
      axios
        .get(starwarsApiUrl + StarWarsApiEndpoints.films)
        .then((res) => {
          setStarWarsData(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [starWarsData]);

  return (
    <div>
      <StyledHeaderContainer>
        <h1>List of Star Wars Films</h1>
      </StyledHeaderContainer>
      <StyledBodyContainer>
        {isLoading && (
          <LoadingContainer message={'Loading Star Wars films...'} />
        )}
        {isError && (
          <ErrorContainer
            message={
              'Error retrieving Star Wars films. Please reload to try again.'
            }
          />
        )}
        {!isError && !isLoading && starWarsData && (
          <VotingTable
            starWarsData={getFilmTitleAndReleaseDate(starWarsData.results)}
            tableTitle='Vote for your favourite Star Wars film'
          />
        )}
      </StyledBodyContainer>
    </div>
  );
}
