import { BannerReducerT } from "./banner/reducer";
import { TopMovieReducerT } from "./topTenMovies/reducer";
import { IMoviesState } from "./movies/reducer";

import {
  AuthResponseType,
  MovieKinopoiskT,
  MoviesForSlidersOnHomePageT,
  RegistrationUserType,
} from "@/types/types";
import { BrowsingMovie } from "./continue_browsing/reducer";
import { IFilterState } from "./filters/reducer";

export type RootState = {
  banner: BannerReducerT;
  topMovies: TopMovieReducerT;
  movies: IMoviesState;
  filters: IFilterState;
  homePage: MoviesForSlidersOnHomePageT;
  continueBrowsing: BrowsingMovie[];
  authData: AuthResponseType;
  registrationData: RegistrationUserType;
  comment: any;
  movie: any;
  moviesWithFilters: MovieKinopoiskT[];
};
