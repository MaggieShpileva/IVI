import {
  getDataBannerFail,
  getDataBannerStart,
  getDataBannerSuccess,
} from "@/Redux/banner/actions";
import { getDataBannerWorker } from "@/Redux/banner/worker";
import { MOVIE_DATA } from "@/Redux/movie/action-types";
import {
  getMovieData,
  getMovieDataFail,
  getMovieDataStart,
  getMovieDataSuccess,
} from "@/Redux/movie/actions";
import { MovieSearchT } from "@/Redux/movie/reducer";
import { selectMovieUser } from "@/Redux/movie/selectors";
import { getDatMovieWorker } from "@/Redux/movie/workers";
import { RootState } from "@/Redux/RootState";
import { store } from "@/Redux/store";
import { BannerType, IMovieRes } from "@/types/types";
import { call, put, select, takeEvery } from "redux-saga/effects";

export function* getDataMovieSaga({ id }: ReturnType<typeof getMovieData>) {
  console.log("saga", id);
  yield put(getMovieDataStart());

  try {
    const res: IMovieRes = yield call(getDatMovieWorker, id);
    yield put(getMovieDataSuccess(res));
  } catch (e) {
    yield put(getMovieDataFail());
  }
}
