import { IStarWarsFilmData, IStarWarsFilmDataDto } from '../../typings/types';
import {
  getFilmTitleAndReleaseDate,
  sortFilmByReleaseDate,
  formatDate
} from './DataTransformationService';

describe('DataTransformationService', () => {
  test('getFilmTitleAndReleaseDate', () => {
    const mockStarWarsDataDto: IStarWarsFilmDataDto[] = [
      {
        title: 'test title',
        episode_id: 1,
        opening_crawl: 'blah blah blah',
        director: 'Person 1',
        producer: 'Person 2',
        release_date: '2000-12-01',
        characters: ['characters'],
        planets: ['planets'],
        starships: ['startships'],
        vehicles: ['vehicles'],
        species: ['species'],
        created: '2000-12-01',
        edited: '2000-12-01',
        url: 'test'
      }
    ];

    expect(getFilmTitleAndReleaseDate(mockStarWarsDataDto)).toStrictEqual([
      { releaseDate: '2000-12-01', title: 'test title', votes: 0 }
    ]);
  });

  test('sortFilmByReleaseDate', () => {
    const mockStarWarsData: IStarWarsFilmData[] = [
      {
        title: 'movie 1',
        releaseDate: '2000-12-01',
        votes: 0
      },
      {
        title: 'movie 2',
        releaseDate: '1987-03-23',
        votes: 0
      },
      {
        title: 'movie 3',
        releaseDate: '2010-06-15',
        votes: 0
      }
    ];

    expect(sortFilmByReleaseDate(mockStarWarsData)).toStrictEqual([
      { releaseDate: '1987-03-23', title: 'movie 2', votes: 0 },
      { releaseDate: '2000-12-01', title: 'movie 1', votes: 0 },
      { releaseDate: '2010-06-15', title: 'movie 3', votes: 0 }
    ]);
  });

  test('formatDate', () => {
    const mockDate = '1998-04-15';

    expect(formatDate(mockDate)).toStrictEqual('15/04/1998');
  });
});
