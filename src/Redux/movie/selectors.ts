import { RootState } from "../RootState";

export const selectMovieUser = (state: RootState) => {
  return state.movie;
};
