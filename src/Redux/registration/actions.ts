import { REGISTRATION_DATA } from "./action-types";

export const getDataUserRegistration = (payload: any) => {
  return {
    type: REGISTRATION_DATA.GET_REGISTRATION_DATA_START,
    payload,
  };
};

export const getDataUserRegistrationSuccess = (payload: any) => ({
  type: REGISTRATION_DATA.GET_REGISTRATION_DATA_SUCCESS,
  payload,
});
export const getDataUserRegistrationFail = () => ({
  type: REGISTRATION_DATA.GET_REGISTRATION_DATA_FAIL,
});
