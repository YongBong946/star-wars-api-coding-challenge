import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { IStarWarsFilmData } from '../../typings/types';
import { VotingTable } from './VotingTable';

const mockVotingTableData: IStarWarsFilmData[] = [
  {
    title: 'test-title',
    releaseDate: '2000-12-01',
    votes: 0
  }
];

afterEach(cleanup);

describe('VotingTable', () => {
  test('display the title, release date, vote counter and total vote counter', () => {
    render(<VotingTable starWarsData={mockVotingTableData} />);

    expect(screen.getByTestId('film-title')).toHaveTextContent(
      mockVotingTableData[0].title
    );
    expect(screen.getByTestId('film-release-date')).toHaveTextContent(
      '01/12/2000'
    );
    expect(screen.getByTestId('film-vote-counter')).toHaveTextContent('0');
    expect(screen.getByTestId('total-votes-counter')).toHaveTextContent('0');
  });

  test('upvote button counter', () => {
    render(<VotingTable starWarsData={mockVotingTableData} />);

    const upvoteButton = screen.getByTestId('film-upvote-button');
    fireEvent.click(upvoteButton);

    expect(screen.getByTestId('film-vote-counter')).toHaveTextContent('1');
    expect(screen.getByTestId('total-votes-counter')).toHaveTextContent('1');
  });

  test('downvote button counter', () => {
    render(<VotingTable starWarsData={mockVotingTableData} />);

    const downvoteButton = screen.getByTestId('film-downvote-button');
    fireEvent.click(downvoteButton);

    expect(screen.getByTestId('film-vote-counter')).toHaveTextContent('0');
    expect(screen.getByTestId('total-votes-counter')).toHaveTextContent('1');
  });
});
