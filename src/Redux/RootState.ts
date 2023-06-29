import { BannerReducerT } from "./banner/reducer";
import { TopMovieReducerT } from "./topTenMovies/reducer";
import { MoviesState } from "./movies/reducer";
import { IFilterState } from "./filter/reducer";
import {
  AuthResponseType,
  IMovie,
  ISimpleMovie,
  MoviesForSlidersOnHomePageT,
  MovieT,
  RegistrationUserType,
} from "@/types/types";
import { BrowsingMovie } from "./continue_browsing/reducer";

export type RootState = {
  banner: BannerReducerT;
  topMovies: TopMovieReducerT;
  movies: MoviesState;
  filters: IFilterState;
  homePage: MoviesForSlidersOnHomePageT;
  continueBrowsing: BrowsingMovie[];
  authData: AuthResponseType;
  registrationData: RegistrationUserType;
  comment: any;
  movie: any;
};
