import { DATA_TOP_MOVIES } from "./action-types";

export const getDataTopMovies = () => {
  return {
    type: DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES,
  };
};

export const getDataTopMoviesStart = () => {
  return {
    type: DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES_START,
  };
};

export const getDataTopMoviesSuccess = (value: any) => {
  return {
    type: DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES_SUCCESS,
    payload: value,
  };
};

export const getDataTopMoviesFail = () => {
  return {
    type: DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES_FAIL,
  };
};
