import { BannerType } from "@/types/types";
import { DATA_BANNER } from "./action-types";

export type BannerReducerT = {
  data: BannerType[];
};

const initialState: BannerReducerT = {
  data: [],
};

export const bannerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_BANNER.GET_DATA_BANNER_START:
      return action.type;

    case DATA_BANNER.GET_DATA_BANNER_SUCCESS:
      return { data: action.payload };

    case DATA_BANNER.GET_DATA_BANNER:
      return { data: action.payload };

    case DATA_BANNER.GET_DATA_BANNER_FAIL:
      return action.type;

    default:
      return state;
  }
};
