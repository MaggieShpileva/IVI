import {
  getDataHomePageFail,
  getDataHomePageStart,
  getDataHomePageSuccess,
} from "@/Redux/homePage/actions";
import { getDataBannerWorker } from "@/Redux/homePage/workers";
import { MoviesForSlidersOnHomePageT } from "@/types/types";
import { call, put } from "redux-saga/effects";

export function* getDataHomePageSaga() {
  yield put(getDataHomePageStart());
  try {
    const response: MoviesForSlidersOnHomePageT = yield call(
      getDataBannerWorker
    );
    yield put(getDataHomePageSuccess(response));
    return response;
  } catch (error: any) {
    yield put(getDataHomePageFail());
  }
}
