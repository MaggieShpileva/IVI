import { AnyAction } from "@reduxjs/toolkit";
import { FILTERS_ACTIONS } from "./action-types";
import { IMovie } from "@/types/types";
import { SortType } from "@/types/types";

export interface IFilterState {
  isFilter: boolean;
  genres: string[];
  countries: string[];
  yearsMin: number;
  yearsMax: number;
  ratingMin: number;
  ratingMax: number;
  scoreMin: number;
  scoreMax: number;
  actors: string[];
  directors: string[];
  results: IMovie[];
  sort: SortType;
  error: string;
}

const initialState: IFilterState = {
  isFilter: false,
  genres: [],
  countries: [],
  yearsMin: 1940,
  yearsMax: 2023,
  ratingMin: 4.0,
  ratingMax: 10.0,
  scoreMin: 1000,
  scoreMax: 1000000,
  actors: [],
  directors: [],
  results: [],
  sort: "RATING",
  error: "",
};

export const filterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FILTERS_ACTIONS.RESET_FILTERS:
      return {
        ...state,
        ...initialState,
      };

    case FILTERS_ACTIONS.SET_GENRES:
      let genresCopy = [...state.genres];
      if (genresCopy.includes(action.payload)) {
        genresCopy = genresCopy.filter((item) => item !== action.payload);
      } else {
        genresCopy.push(action.payload);
      }
      return { ...state, genres: genresCopy, isFilter: true };

    case FILTERS_ACTIONS.SET_COUNTRIES:
      let countriesCopy = [...state.countries];
      if (countriesCopy.includes(action.payload)) {
        countriesCopy = countriesCopy.filter((item) => item !== action.payload);
      } else {
        countriesCopy.push(action.payload);
      }
      return { ...state, countries: countriesCopy, isFilter: true };

    case FILTERS_ACTIONS.SET_YEARS:
      return {
        ...state,
        yearsMin: action.payload[0],
        yearsMax: action.payload[1],
        isFilter: true,
      };

    case FILTERS_ACTIONS.SET_RATING:
      return {
        ...state,
        ratingMin: action.payload[0],
        ratingMax: action.payload[1],
        isFilter: true,
      };

    case FILTERS_ACTIONS.SET_SCORE:
      return {
        ...state,
        scoreMin: action.payload[0],
        scoreMax: action.payload[1],
        isFilter: true,
      };

    case FILTERS_ACTIONS.SET_ACTORS:
      let actorsCopy = [...state.actors];
      if (!actorsCopy.includes(action.payload)) {
        actorsCopy.push(action.payload);
      }
      return { ...state, actors: actorsCopy, isFilter: true };

    case FILTERS_ACTIONS.SET_DIRECTORS:
      let directorsCopy = [...state.directors];
      if (!directorsCopy.includes(action.payload)) {
        directorsCopy.push(action.payload);
      }
      return { ...state, directors: directorsCopy, isFilter: true };

    case FILTERS_ACTIONS.SET_SORT:
      return { ...state, sort: action.payload };

    case FILTERS_ACTIONS.SET_FILTERS_GENRES_COUNTRIES:
      return { ...state, results: action.payload, error: "" };

    case FILTERS_ACTIONS.SET_FILTERS_RESULTS:
      return { ...state, results: action.payload, error: "" };

    case FILTERS_ACTIONS.GET_FILTERS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
