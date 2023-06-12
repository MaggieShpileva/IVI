import {
  getDataHomePageFail,
  getDataHomePageStart,
  getDataHomePageSuccess,
} from "@/Redux/homePage/actions";
import { getDataMoviesHomeWorker } from "@/Redux/homePage/workers";
import { MoviesForSlidersOnHomePageT } from "@/types/types";
import { call, put } from "redux-saga/effects";

export function* getDataHomePageSaga() {
  yield put(getDataHomePageStart());
  try {
    const response: MoviesForSlidersOnHomePageT = yield call(
      getDataMoviesHomeWorker
    );
    yield put(getDataHomePageSuccess(response));
  } catch (error: any) {
    yield put(getDataHomePageFail());
  }
}
