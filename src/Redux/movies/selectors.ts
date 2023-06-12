import { RootState } from "../RootState";

export const selectMovies = (state: RootState) => {
  return state.movies;
};
