import { IMovie, MoviesForFilmsPageT, MovieT } from "@/types/types";
import { MOVIES_ACTIONS } from "./action-types";

export const getInitialMoviesStart = () => ({
  type: MOVIES_ACTIONS.GET_INITIAL_MOVIES_START,
});

export const getInitialMovies = (payload: { page: number }) => ({
  type: MOVIES_ACTIONS.GET_INITIAL_MOVIES,
  ...payload,
});

export const getInitialMoviesSuccess = (payload: MovieT[]) => ({
  type: MOVIES_ACTIONS.GET_INITIAL_MOVIES_SUCCESS,
  payload,
});

export const getInitialMoviesFail = () => ({
  type: MOVIES_ACTIONS.GET_INITIAL_MOVIES_FAIL,
});
