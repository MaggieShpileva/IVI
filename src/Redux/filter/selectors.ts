import { RootState } from "../RootState";

export const selectFilters = (state: RootState) => {
  return state.filters;
};
