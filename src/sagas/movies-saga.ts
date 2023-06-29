import { call, put, takeEvery, take } from "redux-saga/effects";
import {
  getInitialMovies,
  getInitialMoviesFail,
  getInitialMoviesStart,
  getInitialMoviesSuccess,
} from "@/Redux/movies/actions";
import { MovieT } from "@/types/types";
import { initialMovies, movieAllApi } from "@/Redux/movies/worker";

export function* getInitialMoviesSaga({
  page,
}: ReturnType<typeof getInitialMovies>) {
  // yield put(getInitialMoviesStart());
  try {
    const responseMovies: MovieT[] = yield call(initialMovies, page);
    yield put(getInitialMoviesSuccess(responseMovies));
  } catch (error) {
    yield put(getInitialMoviesFail());
  }
}
