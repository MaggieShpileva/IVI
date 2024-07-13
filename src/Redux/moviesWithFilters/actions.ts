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

export const getMoviesWithGender = (payload: any) => {
  console.log("payload", payload);
  return {
    type: MOVIES_WITH_FILTERS_ACTIONS.GET_MOVIES_WITH_GENDER,
    payload,
  };
};
