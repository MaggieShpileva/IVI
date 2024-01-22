import { AnyAction } from "@reduxjs/toolkit";
import { FILTERS_ACTIONS } from "./action-types";
import { IMovie } from "@/types/types";
import { SortType } from "@/types/types";

export interface IFilterState {
  score: number[];
  raiting: number[];
}

const initialState: IFilterState = {
  score: [5, 10],
  raiting: [100000, 1500000],
};

export const filtersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FILTERS_ACTIONS.RESET_FILTERS:
      return {
        ...state,
        ...initialState,
      };

    case FILTERS_ACTIONS.GET_FILTERS_START:
      return action.type;

    case FILTERS_ACTIONS.GET_FILTERS:
      return {
        score: action.raiting,
        raiting: action.score,
      };

    default:
      return state;
  }
};
