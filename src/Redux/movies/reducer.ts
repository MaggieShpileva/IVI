import {
  CountriesType,
  GenresType,
  IMovie,
  ISimpleMovie,
  MovieKinopoiskT,
  PersonForSearchType,
  PersonForSliderType,
} from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { MOVIES_ACTIONS } from "./action-types";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export interface IMoviesState {
  data: MovieKinopoiskT[];
}

const initialState: IMoviesState = {
  data: [],
};

export const moviesReducer = (
  state = initialState,
  action: AnyAction
): IMoviesState => {
  switch (action.type) {
    case MOVIES_ACTIONS.GET_MOVIES_DATA_SUCCESS:
      return action.payload;

    case MOVIES_ACTIONS.GET_MOVIES_ERROR:
      return action.type;

    case MOVIES_ACTIONS.GET_MOVIES_START:
      return action.type;

    case MOVIES_ACTIONS.GET_MOVIES_DATA:
      return action.type;

    default:
      return state;
  }
};
