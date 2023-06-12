import { FILTERS_ACTIONS } from "@/Redux/filter/action-types";
import {
  getErrorFilter,
  setResultsFilter,
  setGenresCountriesFilter,
} from "@/Redux/filter/actions";
import {
  filterApi,
  filterPersons,
  sortHandler,
  filterRangesHandler,
} from "@/Redux/filter/worker";
import { IMovie, MoviesForSlidersOnHomePageT } from "@/types/types";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { selectFilters } from "@/Redux/filter/selectors";

export function* watchFiltersSaga() {
  yield takeEvery(FILTERS_ACTIONS.SET_GENRES, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.SET_COUNTRIES, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.SET_YEARS, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.SET_RATING, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.SET_SCORE, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.SET_ACTORS, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.SET_DIRECTORS, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.GET_SLIDERS_MOVIES, filterMoviesSaga);
}

export function* filterMoviesSaga() {
  console.log("start saga filter genres countries");
  const { genres, countries, actors, directors } = yield select(
    (state) => state.filters
  );
  const body = { genres, countries, actors, directors };

  try {
    const response: IMovie[] = yield call(filterApi, body);
    yield put(setGenresCountriesFilter(response));

    const {
      results,
      yearsMin,
      yearsMax,
      ratingMin,
      ratingMax,
      scoreMin,
      scoreMax,
    } = yield select((state) => state.filters);
    let resultFilter = filterRangesHandler(
      results,
      yearsMin,
      yearsMax,
      ratingMin,
      ratingMax,
      scoreMin,
      scoreMax
    );

    //const { actors, directors } = yield select((state) => state.filters);

    // if (actors.length) {
    //   resultFilter = filterPersons(resultFilter, actors, "actors");
    // }

    // if (directors.length) {
    //   resultFilter = filterPersons(resultFilter, directors, "directors");
    // }

    const { sort } = yield select((state) => state.filters);
    resultFilter = sortHandler(sort, resultFilter);

    yield put(setResultsFilter(resultFilter));
  } catch (error) {
    console.log("error in filterMoviesSaga", error);
    yield put(getErrorFilter(String(error)));
  }
}
