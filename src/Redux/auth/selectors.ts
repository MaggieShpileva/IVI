import { RootState } from "../RootState";

export const selectAuthUser = (state: RootState) => {
  return state.authData;
};
