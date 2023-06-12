import { DATA_HOME_PAGE } from "./action-types";

export const getDataHomePage = () => {
  return {
    type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE,
  };
};
export const getDataHomePageStart = () => {
  return {
    type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE_START,
  };
};
export const getDataHomePageSuccess = (payload: any) => {
  return {
    type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE_SUCCESS,
    payload,
  };
};

export const getDataHomePageFail = () => ({
  type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE_FAIL,
});
