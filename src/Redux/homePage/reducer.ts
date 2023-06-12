import { BannerType, MoviesForSlidersOnHomePageT } from "@/types/types";
import { DATA_HOME_PAGE } from "./action-types";

const initialState: MoviesForSlidersOnHomePageT = {
  bestFantasyFilmsSet: [],
  bestFilmsSet: [],
  familyFriendlyComediesSet: [],
};

export const homePageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE:
      return action.type;
    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE_START:
      return action.type;
    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE_FAIL:
      return action.type;
    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
