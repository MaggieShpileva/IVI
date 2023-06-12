import {
  getMovieData,
  getMovieDataFail,
  getMovieDataStart,
  getMovieDataSuccess,
} from "@/Redux/movie/actions";
import { getDatMovieWorker } from "@/Redux/movie/workers";
import { IMovieRes } from "@/types/types";
import { call, put } from "redux-saga/effects";

export function* getDataMovieSaga({ id }: ReturnType<typeof getMovieData>) {
  yield put(getMovieDataStart());
  try {
    const res: IMovieRes = yield call(getDatMovieWorker, id);
    yield put(getMovieDataSuccess(res));
  } catch (e) {
    yield put(getMovieDataFail());
  }
}
