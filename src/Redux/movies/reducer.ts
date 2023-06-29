import {
  CountriesType,
  GenresType,
  IMovie,
  ISimpleMovie,
  MovieT,
  PersonForSearchType,
  PersonForSliderType,
} from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { MOVIES_ACTIONS } from "./action-types";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { InferValueTypes } from "@/sagas/RootSaga";

// export interface IMoviesState {
//   start: string;
//   actors: PersonForSearchType[];
//   directors: PersonForSearchType[];
//   genresRu: GenresType[];
//   genresEn: GenresType[];
//   countriesRu: CountriesType[];
//   countriesEn: CountriesType[];
//   popularActors: PersonForSliderType[];
//   bestFilmsSet: ISimpleMovie[];
//   error: string;
// }
import * as actions from "./actions";
type Actions = ReturnType<InferValueTypes<typeof actions>>;

export type MoviesState = {
  data: MovieT[];
  isLoading: boolean;
};
const initialState: MoviesState = {
  data: [],
  isLoading: false,
};

export const moviesReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case MOVIES_ACTIONS.GET_INITIAL_MOVIES_START:
      return { ...state, isLoading: true };

    case MOVIES_ACTIONS.GET_INITIAL_MOVIES_SUCCESS:
      return { ...state, data: [...state.data, ...action.payload] };

    case MOVIES_ACTIONS.GET_INITIAL_MOVIES_FAIL:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
