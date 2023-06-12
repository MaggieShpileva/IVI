import { MOVIE_DATA } from "./action-types";

export const getMovieData = (payload: { id: string | string[] }) => {
  return {
    type: MOVIE_DATA.GET_MOVIE_DATA,
    ...payload,
  };
};

export const getMovieDataStart = () => {
  return {
    type: MOVIE_DATA.GET_MOVIE_DATA_START,
  };
};

export const getMovieDataSuccess = (payload: any) => ({
  type: MOVIE_DATA.GET_MOVIE_DATA_SUCCESS,
  payload,
});
export const getMovieDataFail = () => ({
  type: MOVIE_DATA.GET_MOVIE_DATA_FAIL,
});
