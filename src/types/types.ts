export type GenresType = {
  id: number;
  name: string;
};

export type CountriesType = {
  id: number;
  name: string;
};

export type DirectorsType = {
  id: number;
  name: string;
  photo?: string;
};

export type ActorsType = {
  id: number;
  name: string;
  photo?: string;
};

export type FilmLangType = {
  lang: "ru" | "en";
  filmName: string;
  filmDescription?: string | null;
};

export interface ISimpleMovie {
  id: number;
  filmPoster: string;
  filmGrade: number;
  filmYear: number;
  filmTime: number;
  filmAge: string;
  filmLang: FilmLangType[];
  genres: GenresType[];
  countries: CountriesType[];
  actors?: ActorsType[];
  directors?: DirectorsType[];
}
export interface IMovie extends ISimpleMovie {
  filmType: string;
  filmLink: string;
  filmTrailer: string;
  filmTotalGrade: number;
  filmR: string;
  similarFilms?: ISimpleMovie[];
  reviews?: string[];
}

export type PersonLangType = {
  lang: "ru" | "en";
  personName: string | null;
  career?: string | null;
  birthPlace?: string | null;
};

export type PersonFilmsType = {
  id: number;
  name: string;
  year: number;
  rating: number;
  poster: string;
};
export interface IPerson {
  id: number;
  personLink?: string;
  personPicture: string;
  personGender?: string;
  personLang: PersonLangType[];
  height?: number;
  age?: number;
  birthDate?: string;
  films?: PersonFilmsType[];
}

export type PersonForSliderType = {
  filmsNumber: number;
  person: IPerson;
};

export type PersonForSearchType = {
  id: number;
  personLang: PersonLangType[];
};

export type ResponseError = {
  message: string;
};

export type AuthData = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: {
    id: number;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type TokenType = {
  accessToken: string;
  refreshToken: string;
};

export type UserType = {
  id: number;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export type ProfileType = {
  id: number;
  userId: number;
  nickname: string;
  updatedAt: string;
  createdAt: string;
};
export type RegistrationUserType = {
  tokens: TokenType;
  user: UserType;
  profile: ProfileType;
};

export type AuthResponseType = {
  tokens: TokenType;
  user: UserType;
};
export interface IUser {
  id: number;
  name: string;
}

export interface IFilters {}

export type BannerType = {
  id: number;
  logo: string;
  poster: string;
  trailer: string;
  name: string;
};

export type nameType = {
  name: string;
};

export type PosterKPType = {
  previewUrl: string;
  url: string;
};

export type RaitingKPType = {
  await: null | number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
};

export type ResponseTopMovieKPType = {
  id: number;
  poster: PosterKPType;
};

export type FilterRangeType = [number, number];

export type SortType = "SCORE" | "RATING" | "DATE" | "TITLE";

export type SearchParamsType = {
  lang: string | null;
  genres?: string[];
  countries?: string[];
  yearsMin?: number;
  yearsMax?: number;
  ratingMin?: number;
  ratingMax?: number;
  scoreMin?: number;
  scoreMax?: number;
  actors?: string[];
  directors?: string[];
};

export type MoviesForSlidersOnHomePageT = {
  bestFantasyFilmsSet: ISimpleMovie[];
  bestFilmsSet: ISimpleMovie[];
  familyFriendlyComediesSet: ISimpleMovie[];
};

export type MoviesForFilmsPageT = {
  popularActors: PersonForSliderType[];
  bestFilmsSet: ISimpleMovie[];
  actors: PersonForSearchType[];
  directors: PersonForSearchType[];
  genresRu: GenresType[];
  genresEn: GenresType[];
  countriesRu: CountriesType[];
  countriesEn: CountriesType[];
};

export interface IMovieRes {
  id: number;
  filmType: string;
  filmLink: string;
  filmTrailer: string;
  filmYear: number;
  filmTime: number;
  filmGrade: number;
  filmTotalGrade: number;
  filmR: string;
  filmAge: string;
  filmPoster: string;
  directors: {
    id: number;
    name: string;
  }[];
  similarFilms: ISimilarFilmRes[];
}

interface ISimilarFilmRes {
  id: number;
  filmPoster: string;
  filmGrade: number;
  filmYear: number;
  filmTime: number;
  filmAge: string;
  filmLang: {
    lang: string;
    filmName: string;
  }[];
  genres: {
    id: number;
    name: string;
  }[];
  countries: {
    id: number;
    name: string;
  }[];
}
