import { BannerType } from "@/types/types";
import { DATA_BANNER } from "./action-types";

export const getDataBanner = () => {
  return {
    type: DATA_BANNER.GET_DATA_BANNER,
  };
};

export const getDataBannerStart = () => {
  return {
    type: DATA_BANNER.GET_DATA_BANNER_START,
  };
};

export const getDataBannerSuccess = (value: BannerType[]) => {
  return {
    type: DATA_BANNER.GET_DATA_BANNER_SUCCESS,
    payload: value,
  };
};

export const getDataBannerFail = () => {
  return {
    type: DATA_BANNER.GET_DATA_BANNER_FAIL,
  };
};
