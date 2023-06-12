import { RootState } from "../RootState";

export const selectBrowsingMovie = (state: RootState) => {
  return state.continueBrowsing;
};
