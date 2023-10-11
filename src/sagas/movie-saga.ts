import {
  getMovieData,
  getMovieDataFail,
  getMovieDataStart,
  getMovieDataSuccess,
} from "@/Redux/movie/actions";
import { getDatMovieWorker } from "@/Redux/movie/workers";
import { IMovieRes, MovieKinopoiskT } from "@/types/types";
import { call, put } from "redux-saga/effects";

export function* getDataMovieSaga({ id }: ReturnType<typeof getMovieData>) {
  yield put(getMovieDataStart());
  try {
    // const res: MovieKinopoiskT = yield call(getDatMovieWorker, id);
    // yield put(getMovieDataSuccess(res));
  } catch (e) {
    yield put(getMovieDataFail());
  }
}
