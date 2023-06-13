import {
  AuthResponseType,
  IMovie,
  IMovieRes,
  RegistrationUserType,
} from "@/types/types";
import { MOVIE_DATA } from "./action-types";
import * as actions from "./actions";
import { InferValueTypes } from "@/sagas/RootSaga";

type Actions = ReturnType<InferValueTypes<typeof actions>>;

export type MovieSearchT = {
  data: IMovieRes[];
};
const initialState: IMovieRes = {
  id: 0,
  filmType: "",
  filmLink: "",
  filmTrailer: "",
  filmYear: 0,
  filmTime: 0,
  filmGrade: 0,
  filmTotalGrade: 0,
  filmR: "",
  filmAge: "",
  filmPoster: "",
  directors: [
    {
      id: 0,
      name: "",
    },
  ],
  similarFilms: [
    {
      id: 0,
      filmPoster: "",
      filmGrade: 0,
      filmYear: 0,
      filmTime: 0,
      filmAge: "",
      filmLang: [
        {
          lang: "",
          filmName: "",
        },
      ],
      genres: [
        {
          id: 0,
          name: "",
        },
      ],
      countries: [
        {
          id: 0,
          name: "",
        },
      ],
    },
  ],
};

export const MovieReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case MOVIE_DATA.GET_MOVIE_DATA:
      return action.type;

    case MOVIE_DATA.GET_MOVIE_DATA_START:
      return action.type;

    case MOVIE_DATA.GET_MOVIE_DATA_FAIL:
      return action.type;

    case MOVIE_DATA.GET_MOVIE_DATA_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
