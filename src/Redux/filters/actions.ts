import { FilterRangeType, IMovie, ISimpleMovie } from "@/types/types";
import { SortType } from "@/types/types";
import { FILTERS_ACTIONS } from "./action-types";

export const resetFilters = () => {
  return {
    type: FILTERS_ACTIONS.RESET_FILTERS,
  };
};

export const getFiltersStart = () => {
  return {
    type: FILTERS_ACTIONS.GET_FILTERS_START,
  };
};

export const getAllFilters = (payload: {
  score: number[];
  raiting: number[];
}) => {
  console.log("action", payload);
  return {
    type: FILTERS_ACTIONS.GET_FILTERS,
    ...payload,
  };
};
export const getMoviesWithFilters = (payload: any) => {
  console.log("success", payload);
  return {
    type: FILTERS_ACTIONS.GET_FILTERS_ERROR,
    payload: payload,
  };
};

export const getErrorFilter = (error: string) => {
  return {
    type: FILTERS_ACTIONS.GET_FILTERS_ERROR,
    payload: error,
  };
};
