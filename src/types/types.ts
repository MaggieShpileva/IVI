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
  filmLang: FilmLangType[];
  filmGrade?: number;
  filmYear?: number;
  filmTime?: number;
  filmAge?: string;
  genres?: GenresType[];
  countries?: CountriesType[];
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
  filmsNumber: any;
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
  message: string;
  user: {
    email: string;
    name: string;
    password: string;
    role: string;
  };
  // id: string;
  // _id: string;
  // email: string;
  // name: string;
  // password: string;
  // role: string;
};

export type AuthResponseType = {
  tokens: TokenType;
  user: UserType;
};
export interface IUser {
  id: number;
  name: string;
  email: string;
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

///////////////////////////////////////////////////
export type MovieKinopoiskT = {
  fees: MovieFees;
  status: any;
  externalId: ExternalId;
  id: number;
  type: string;
  name: string;
  description: string;
  rating: Grade;
  votes: Grade;
  backdrop: Poster;
  movieLength: number;
  images?: any;
  productionCompanies: ProductionCompanies[];
  spokenLanguages?: SpokenLanguages[];
  distributors: Distributors;
  premiere: Premiere;
  slogan: string;
  year: number;
  budget: Price;
  poster: Poster;
  facts: Facts[];
  genres: NameT[];
  countries: NameT[];
  videos: Videos;
  seasonsInfo: any;
  persons: Person[];
  lists: any;
  typeNumber: number;
  alternativeName: string;
  enName: any;
  names: NameT[];
  ageRating: number;
  ratingMpaa: string;
  updateDates: any;
  sequelsAndPrequels: any;
  updatedAt: string;
  shortDescription: string;
  technology?: any;
  ticketsOnSale?: any;
  similarMovies: SimilarMovie[];
  imagesInfo: any;
  logo: Poster;
  watchability: any;
  top10: null | number;
  top250: null | number;
  audience: any;
  deletedAt: null | string;
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
};

////////////////////////////////
type MovieFees = {
  world: Price[];
  russia?: Price[];
  usa?: Price[];
};

type Price = {
  value: number;
  currency: string;
};

type ExternalId = {
  kpHD: string;
  imdb: string;
  tmdb: number;
};

export type Grade = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
};

type Poster = {
  previewUrl?: string;
  url: string;
};

type ProductionCompanies = {
  name: string;
  url: null | string;
  previewUrl: null | string;
};

type SpokenLanguages = { name: string; nameEn: string };

type Distributors = {
  distributor: string;
  distributorRelease: string;
};

type Premiere = {
  world: string;
  russia: string;
};

type Facts = {
  value: string;
  type: string;
  spoiler: boolean;
};

export type NameT = {
  name: string;
  language?: string;
  type?: any;
};

type Videos = {
  trailers: Video[];
  teasers?: any;
};

type Video = {
  url: string;
  name: string;
  site: string;
  type: string;
};

export type Person = {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
};

export type SimilarMovie = {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: Poster;
};
