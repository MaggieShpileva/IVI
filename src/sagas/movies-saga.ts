import { call, put, takeEvery, take } from "redux-saga/effects";
import {
  getMoviesData,
  getMoviesDataStart,
  getMoviesDataSuccess,
  getMoviesError,
} from "@/Redux/movies/actions";
import {
  GenresType,
  IMovie,
  ISimpleMovie,
  MoviesForFilmsPageT,
} from "@/types/types";
import { movieAllApi } from "@/Redux/movies/worker";
import { editGenresApi } from "@/Redux/movies/worker";
import { MOVIES_ACTIONS } from "@/Redux/movies/action-types";
import { filterGender } from "@/Redux/moviesWithFilters/worker";

export function* watchMoviesSaga() {
  yield takeEvery(MOVIES_ACTIONS.WATCH_EDIT_GENRE, editGenreSaga);
  //yield takeEvery(MOVIES_ACTIONS.GET_MOVIES_DATA, getMoviesSaga);
}

export function* getMoviesSaga() {
  yield put(getMoviesDataStart());
  try {
    const responseMovies: ISimpleMovie[] = yield call(movieAllApi);
    yield put(getMoviesDataSuccess(responseMovies));
  } catch (error) {
    console.log("error in getMoviesSaga", error);
    yield put(getMoviesError(String(error)));
  }
}

export function* editGenreSaga(args: any) {
  console.log("start saga edit genre");
  try {
    const response: GenresType = yield call(editGenresApi, args);
  } catch (error) {
    console.log("error in editGenreSaga", error);
    yield put(getMoviesError(String(error)));
  }
  //yield put(editGenre(response));
}

export function* getGenresMoviesSaga(args: any) {
  const response: ISimpleMovie[] = yield call(filterGender, args);
  yield put(getMoviesDataSuccess(response));
}
