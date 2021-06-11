import { IStarWarsFilmDataDto, IStarWarsFilmData } from '../../typings/types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const getFilmTitleAndReleaseDate = (
  filmData: IStarWarsFilmDataDto[]
): IStarWarsFilmData[] => {
  let arrayOfFilmTitleAndReleaseDate = [] as IStarWarsFilmData[];
  filmData.forEach((film) => {
    const { title, release_date } = film;
    arrayOfFilmTitleAndReleaseDate.push({
      title,
      releaseDate: release_date,
      votes: 0
    });
  });

  return sortFilmByReleaseDate(arrayOfFilmTitleAndReleaseDate);
};

export const sortFilmByReleaseDate = (
  filmData: IStarWarsFilmData[]
): IStarWarsFilmData[] => {
  return filmData.sort((a, b) => {
    if (a.releaseDate > b.releaseDate) {
      return 1;
    }
    if (a.releaseDate < b.releaseDate) {
      return -1;
    }
    return 0;
  });
};

export const formatDate = (date: string): string => {
  return dayjs(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
};
