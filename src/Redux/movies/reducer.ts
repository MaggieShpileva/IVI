import {
  CountriesType,
  GenresType,
  IMovie,
  ISimpleMovie,
  PersonForSearchType,
  PersonForSliderType,
} from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { MOVIES_ACTIONS } from "./action-types";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export interface IMoviesState {
  start: string;
  actors: PersonForSearchType[];
  directors: PersonForSearchType[];
  genresRu: GenresType[];
  genresEn: GenresType[];
  countriesRu: CountriesType[];
  countriesEn: CountriesType[];
  popularActors: PersonForSliderType[];
  bestFilmsSet: ISimpleMovie[];
  error: string;
}

const initialState: IMoviesState = {
  start: "",
  actors: [],
  directors: [],
  genresRu: [],
  genresEn: [],
  countriesRu: [],
  countriesEn: [],
  popularActors: [],
  bestFilmsSet: [],
  error: "",
};

export const moviesReducer = (
  state = initialState,
  action: AnyAction
): IMoviesState => {
  switch (action.type) {
    case MOVIES_ACTIONS.GET_MOVIES_DATA_SUCCESS:
      return action.payload;

    case MOVIES_ACTIONS.GET_MOVIES_ERROR:
      return { ...state, error: action.payload };

    case MOVIES_ACTIONS.GET_MOVIES_START:
      return action.type;

    case MOVIES_ACTIONS.GET_MOVIES_DATA:
      return action.type;

    default:
      return state;
  }
};
