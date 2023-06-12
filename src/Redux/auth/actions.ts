import { AUTH_DATA } from "./action-types";

export const getDataUser = (payload: any) => {
  return {
    type: AUTH_DATA.GET_AUTH_DATA_START,
    payload,
  };
};

export const clearDataUser = () => {
  return {
    type: AUTH_DATA.CLEAR_AUTH_DATA,
  };
};
export const getDataUserSuccess = (payload: any) => ({
  type: AUTH_DATA.GET_AUTH_DATA_SUCCESS,
  payload,
});
export const getDataUserFail = () => ({
  type: AUTH_DATA.GET_AUTH_DATA_FAIL,
});
