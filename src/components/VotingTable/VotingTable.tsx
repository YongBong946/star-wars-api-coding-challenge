import React, { useState } from 'react';
import { VotingNumber } from '../../typings/enums';
import { formatDate } from '../../services/DataTransformationService/DataTransformationService';
import { IStarWarsFilmData } from '../../typings/types';

export interface VotingTableProps {
  starWarsData: IStarWarsFilmData[];
}

export const VotingTable: React.FunctionComponent<VotingTableProps> = (
  props
) => {
  const { starWarsData } = props;
  const [votingTableData, setVotingTableData] =
    useState<IStarWarsFilmData[]>(starWarsData);
  const [totalVotes, setTotalVotes] = useState<number>(0);

  const voteClickHandler = (
    currentVotes: number,
    voteNumberChange: number,
    index: number
  ) => {
    const votingTableState = [...votingTableData];
    const updatedVoteNumber: number = currentVotes + voteNumberChange;
    votingTableState[index].votes = updatedVoteNumber;
    setVotingTableData(votingTableState);
    setTotalVotes(totalVotes + 1);
  };

  return (
    <table data-testid='voting-table'>
      <thead>
        <tr>
          <th>Star Wars Film</th>
          <th>Release Date</th>
          <th>Votes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {votingTableData.map((votingRow, index) => {
          const { title, releaseDate, votes } = votingRow;
          return (
            <tr key={index}>
              <td data-testid='film-title'>{title}</td>
              <td data-testid='film-release-date'>{formatDate(releaseDate)}</td>
              <td data-testid='film-vote-counter'>{votes}</td>
              <td>
                <button
                  data-testid='film-upvote-button'
                  onClick={() =>
                    voteClickHandler(votes, VotingNumber.upvote, index)
                  }
                >
                  Upvote
                </button>
                <button
                  data-testid='film-downvote-button'
                  onClick={() =>
                    voteClickHandler(votes, VotingNumber.downvote, index)
                  }
                >
                  Downvote
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td>
            <strong>Total Votes</strong>
          </td>
          <td>
            <strong data-testid='total-votes-counter'>{totalVotes}</strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
