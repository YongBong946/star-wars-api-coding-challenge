import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import axios, { AxiosResponse } from 'axios';

jest.mock('axios');

const mockAxiosReturnData = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      title: 'test1',
      release_date: '1997-12-01'
    }
  ]
};

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedResponse: AxiosResponse = {
  data: mockAxiosReturnData,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {}
};

afterEach(cleanup);

describe('App', () => {
  test('renders the LoadingContainer then the VotingTable when it returns the data', async () => {
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    const { getByTestId } = render(<App />);
    expect(getByTestId('loading-container')).toHaveTextContent(
      'Loading Star Wars films...'
    );

    const resolvedCall = await waitFor(() => getByTestId('voting-table'));
    expect(resolvedCall).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('renders the LoadingContainer then the ErrorContainer when it returns an error', async () => {
    mockedAxios.get.mockResolvedValueOnce(undefined);
    const { getByTestId } = render(<App />);
    expect(getByTestId('loading-container')).toHaveTextContent(
      'Loading Star Wars films...'
    );

    const resolvedCall = await waitFor(() => getByTestId('error-container'));
    expect(resolvedCall).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
