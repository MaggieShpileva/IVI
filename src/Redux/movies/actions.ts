import { IMovie, MoviesForFilmsPageT } from "@/types/types";
import { MOVIES_ACTIONS } from "./action-types";

export const getMoviesData = (data: MoviesForFilmsPageT) => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES_DATA,
    payload: data,
  };
};

export const getMoviesError = (error: string) => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES_ERROR,
    payload: error,
  };
};

export const watchEditGenre = (editGenre: { id: number; genre: string }) => {
  return {
    type: MOVIES_ACTIONS.WATCH_EDIT_GENRE,
    payload: editGenre,
  };
};

export const editGenre = (editGenre: { id: number; genre: string }) => {
  return {
    type: MOVIES_ACTIONS.EDIT_GENRE,
    payload: editGenre,
  };
};

export const getMoviesDataStart = () => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES_START,
  };
};
