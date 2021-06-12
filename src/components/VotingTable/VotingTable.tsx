import React, { useState } from 'react';
import { VotingNumber } from '../../typings/enums';
import { formatDate } from '../../services/DataTransformationService/DataTransformationService';
import { IStarWarsFilmData } from '../../typings/types';
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledVotingTableContainer
} from './VotingTable.style';

export interface VotingTableProps {
  starWarsData: IStarWarsFilmData[];
  tableTitle: string;
}

export const VotingTable: React.FunctionComponent<VotingTableProps> = (
  props
) => {
  const { starWarsData, tableTitle } = props;
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
    <StyledVotingTableContainer>
      <h3 id='table-title'>{tableTitle}</h3>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Star Wars Film</StyledTh>
            <StyledTh>Release Date</StyledTh>
            <StyledTh>Votes</StyledTh>
            <StyledTh></StyledTh>
          </tr>
        </thead>
        <tbody>
          {votingTableData.map((votingRow, index) => {
            const { title, releaseDate, votes } = votingRow;
            return (
              <tr key={index}>
                <StyledTd id='film-title'>{title}</StyledTd>
                <StyledTd id='film-release-date'>
                  {formatDate(releaseDate)}
                </StyledTd>
                <StyledTd id='film-vote-counter'>{votes}</StyledTd>
                <StyledTd>
                  <button
                    id='film-upvote-button'
                    onClick={() =>
                      voteClickHandler(votes, VotingNumber.upvote, index)
                    }
                  >
                    Upvote
                  </button>
                  <button
                    id='film-downvote-button'
                    onClick={() =>
                      voteClickHandler(votes, VotingNumber.downvote, index)
                    }
                  >
                    Downvote
                  </button>
                </StyledTd>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <StyledTd>
              <strong>Total Votes</strong>
            </StyledTd>
            <StyledTd>
              <strong id='total-votes-counter'>{totalVotes}</strong>
            </StyledTd>
            <td></td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledVotingTableContainer>
  );
};
