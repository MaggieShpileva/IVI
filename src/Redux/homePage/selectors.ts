import { RootState } from "../RootState";

export const selectHomePage = (state: RootState) => {
  return state.homePage;
};
