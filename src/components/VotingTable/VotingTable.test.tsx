import { render, screen, fireEvent } from '@testing-library/react';
import { IStarWarsFilmData } from '../../typings/types';
import { VotingTable, VotingTableProps } from './VotingTable';

const mockData: IStarWarsFilmData[] = [
  {
    title: 'test-title',
    releaseDate: '2000-12-01',
    votes: 0
  }
];
const mockVotingTableProps: VotingTableProps = {
  starWarsData: mockData,
  tableTitle: 'This is a title'
};

describe('VotingTable', () => {
  test('display the table title, film title, film release date, vote counter and total vote counter', () => {
    render(<VotingTable {...mockVotingTableProps} />);

    expect(document.getElementById('table-title')).toHaveTextContent(
      mockVotingTableProps.tableTitle
    );
    expect(document.getElementById('film-title')).toHaveTextContent(
      mockVotingTableProps.starWarsData[0].title
    );
    expect(document.getElementById('film-release-date')).toHaveTextContent(
      '01/12/2000'
    );
    expect(document.getElementById('film-vote-counter')).toHaveTextContent('0');
    expect(document.getElementById('total-votes-counter')).toHaveTextContent(
      '0'
    );
  });

  test('Buttons and Counter number', () => {
    render(<VotingTable {...mockVotingTableProps} />);

    const upvoteButton = screen.getByRole('button', { name: /Upvote/i });
    const downvoteButton = screen.getByRole('button', { name: /Downvote/i });

    fireEvent.click(upvoteButton);

    expect(document.getElementById('film-vote-counter')).toHaveTextContent('1');
    expect(document.getElementById('total-votes-counter')).toHaveTextContent(
      '1'
    );

    fireEvent.click(downvoteButton);

    expect(document.getElementById('film-vote-counter')).toHaveTextContent('0');
    expect(document.getElementById('total-votes-counter')).toHaveTextContent(
      '2'
    );
  });
});
