import { RootState } from "../RootState";

export const selectRegistrUser = (state: RootState) => {
  return state.registrationData;
};
