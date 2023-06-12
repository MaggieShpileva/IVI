import { FilterRangeType, IMovie, ISimpleMovie } from "@/types/types";
import { SortType } from "@/types/types";
import { FILTERS_ACTIONS } from "./action-types";

export const resetFilters = () => {
  return {
    type: FILTERS_ACTIONS.RESET_FILTERS,
  };
};

export const setGenres = (genre: string) => {
  return {
    type: FILTERS_ACTIONS.SET_GENRES,
    payload: genre,
  };
};

export const setCountries = (countries: string) => {
  return {
    type: FILTERS_ACTIONS.SET_COUNTRIES,
    payload: countries,
  };
};

export const setYears = (years: FilterRangeType) => {
  return {
    type: FILTERS_ACTIONS.SET_YEARS,
    payload: years,
  };
};

export const setRating = (rating: FilterRangeType) => {
  return {
    type: FILTERS_ACTIONS.SET_RATING,
    payload: rating,
  };
};

export const setScore = (score: FilterRangeType) => {
  return {
    type: FILTERS_ACTIONS.SET_SCORE,
    payload: score,
  };
};

export const setActorsFilter = (actor: string) => {
  return {
    type: FILTERS_ACTIONS.SET_ACTORS,
    payload: actor,
  };
};

export const setDirectorsFilter = (director: string) => {
  return {
    type: FILTERS_ACTIONS.SET_DIRECTORS,
    payload: director,
  };
};

export const setSortFilter = (sort: SortType) => {
  return {
    type: FILTERS_ACTIONS.SET_SORT,
    payload: sort,
  };
};

export const setGenresCountriesFilter = (results: IMovie[]) => {
  return {
    type: FILTERS_ACTIONS.SET_FILTERS_GENRES_COUNTRIES,
    payload: results,
  };
};

export const setResultsFilter = (results: IMovie[] | ISimpleMovie[]) => {
  return {
    type: FILTERS_ACTIONS.SET_FILTERS_RESULTS,
    payload: results,
  };
};

export const getErrorFilter = (error: string) => {
  return {
    type: FILTERS_ACTIONS.GET_FILTERS_ERROR,
    payload: error,
  };
};
