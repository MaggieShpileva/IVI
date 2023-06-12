import { RootState } from "../RootState";

export const selectBanner = (state: RootState) => {
  return state.banner;
};
