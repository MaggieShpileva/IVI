import { all, fork, takeEvery } from "redux-saga/effects";
import { getDataTopMoviesSaga } from "./top-movies-saga";
import { getInitialMoviesSaga } from "./movies-saga";
//import { getMoviesSaga } from "./movies-saga";
import { watchFiltersSaga } from "./filter-saga";
import { getDataBannerSaga } from "./banner-saga";
import { getDataHomePageSaga } from "./home-page-saga";
import { getMovieData } from "@/Redux/movie/actions";
import { getDataMovieSaga } from "./movie-saga";
import { MOVIE_DATA } from "@/Redux/movie/action-types";
import { DATA_BANNER } from "@/Redux/banner/action-types";
import { DATA_HOME_PAGE } from "@/Redux/homePage/action-types";
import { DATA_TOP_MOVIES } from "@/Redux/topTenMovies/action-types";
import { MOVIES_ACTIONS } from "@/Redux/movies/action-types";

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export function* rootSaga() {
  try {
    yield all([
      takeEvery(DATA_BANNER.GET_DATA_BANNER, getDataBannerSaga),
      takeEvery(DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES, getDataTopMoviesSaga),
      // takeEvery(MOVIES_ACTIONS.GET_MOVIES_DATA, getMoviesSaga),
      takeEvery(MOVIES_ACTIONS.GET_INITIAL_MOVIES, getInitialMoviesSaga),
      takeEvery(DATA_HOME_PAGE.GET_DATA_HOME_PAGE, getDataHomePageSaga),
      // takeEvery(,watchMoviesSaga),
      takeEvery(MOVIE_DATA.GET_MOVIE_DATA, getDataMovieSaga),
    ]);
  } catch (e) {
    console.log("error in root saga", e);
  }
}
