import { RootState } from "../RootState";

export const selectMoviesWithFilters = (state: RootState) => {
  return state.moviesWithFilters;
};
