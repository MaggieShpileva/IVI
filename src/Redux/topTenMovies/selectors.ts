import { RootState } from "../RootState";

export const selectTopMovies = (state: RootState) => {
  return state.topMovies.data;
};
