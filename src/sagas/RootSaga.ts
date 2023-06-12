import { all, fork, takeEvery } from "redux-saga/effects";
import { getDataTopMoviesSaga } from "./top-movies-saga";
import { getMoviesSaga, watchMoviesSaga } from "./movies-saga";
//import { getMoviesSaga } from "./movies-saga";
import { watchFiltersSaga } from "./filter-saga";
import { getDataBannerSaga } from "./banner-saga";
import { getDataHomePageSaga } from "./home-page-saga";
import { getMovieData } from "@/Redux/movie/actions";
import { getDataMovieSaga } from "./movie-saga";
import { MOVIE_DATA } from "@/Redux/movie/action-types";

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export function* rootSaga() {
  try {
    yield all([
      // takeEvery(,getDataBannerSaga),
      // takeEvery(,getDataTopMoviesSaga),
      // takeEvery(,getMoviesSaga),
      // takeEvery(,watchFiltersSaga),
      // takeEvery(,getDataHomePageSaga),
      // takeEvery(,watchMoviesSaga),
      takeEvery(MOVIE_DATA.GET_MOVIE_DATA, getDataMovieSaga),
    ]);
  } catch (e) {
    console.log("error in root saga", e);
  }
}
