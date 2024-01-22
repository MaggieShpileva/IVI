import { MovieKinopoiskT } from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { MOVIES_WITH_FILTERS_ACTIONS } from "./action-types";

export interface IMoviesState {
  data: MovieKinopoiskT[];
}

const initialState: IMoviesState = {
  data: [],
};

export const moviesWithFiltersReducer = (
  state = initialState,
  action: AnyAction
): IMoviesState => {
  switch (action.type) {
    case MOVIES_WITH_FILTERS_ACTIONS.GET_MOVIES_DATA_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
