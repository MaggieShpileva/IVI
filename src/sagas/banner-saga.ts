import {
  getDataBannerFail,
  getDataBannerStart,
  getDataBannerSuccess,
} from "@/Redux/banner/actions";
import { getDataBannerWorker } from "@/Redux/banner/worker";
import { BannerType } from "@/types/types";
import { call, put } from "redux-saga/effects";

export function* getDataBannerSaga() {
  yield put(getDataBannerStart());
  try {
    const response: BannerType = yield call(getDataBannerWorker);
    yield put(getDataBannerSuccess(response));
    return response;
  } catch (error: any) {
    yield put(getDataBannerFail());
  }
}
