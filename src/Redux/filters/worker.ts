import { IMovie } from "@/types/types";
import { SortType } from "@/types/types";
import movies from "../../data/new_data/movies.json";

export const MoviesFiltersWorker = (raiting: number[], score: number[]) => {
  const result = movies.docs.filter((item) => {
    return item.rating.kp >= raiting[0] && item.rating.kp <= raiting[1] && item.votes.kp >= score[0] && item.votes.kp <= score[1];
  });
  return result;
};

// -----------------

export const filterPersons = (movies: IMovie[], persons: string[], type: string): IMovie[] => {
  let res: IMovie[] = [];

  for (const film of movies) {
    if (type === "actors") {
      const findActors = film.actors?.filter((item) => persons.includes(item.name));
      if (findActors?.length) {
        res.push(film);
      }
    } else {
      const findDirectors = film.directors?.filter((item) => persons.includes(item.name));
      if (findDirectors?.length) {
        res.push(film);
      }
    }
  }

  return res;
};

export const sortHandler = (sort: SortType, movies: IMovie[]): IMovie[] => {
  let res = [...movies];
  switch (sort) {
    case "SCORE":
      res.sort((a, b) => b.filmTotalGrade - a.filmTotalGrade);
      break;
    case "RATING":
      res.sort((a, b) => b.filmGrade - a.filmGrade);
      break;
    case "DATE":
      res.sort((a, b) => b.filmYear - a.filmYear);
      break;
    case "TITLE":
      res.sort((a, b) => a.filmLang[0].filmName.localeCompare(b.filmLang[0].filmName));
      break;
  }
  return res;
};
