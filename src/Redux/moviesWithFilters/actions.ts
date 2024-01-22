import {
  IMovie,
  ISimpleMovie,
  MovieKinopoiskT,
  MoviesForFilmsPageT,
} from "@/types/types";
import { MOVIES_WITH_FILTERS_ACTIONS } from "./action-types";

export const getMoviesDataSuccess = (data: MovieKinopoiskT[]) => {
  return {
    type: MOVIES_WITH_FILTERS_ACTIONS.GET_MOVIES_DATA_SUCCESS,
    payload: data,
  };
};
