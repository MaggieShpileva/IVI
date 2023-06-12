import {
  getDataTopMoviesFail,
  getDataTopMoviesStart,
  getDataTopMoviesSuccess,
} from "@/Redux/topTenMovies/actions";
import { getDataTopMoviesWorker } from "@/Redux/topTenMovies/worker";
import { ResponseTopMovieKPType } from "@/types/types";
import { call, put } from "redux-saga/effects";

export function* getDataTopMoviesSaga() {
  yield put(getDataTopMoviesStart());
  try {
    const response: ResponseTopMovieKPType[] = yield call(
      getDataTopMoviesWorker
    );
    yield put(getDataTopMoviesSuccess(response));
    return response;
  } catch (error: any) {
    yield put(getDataTopMoviesFail());
  }
}
