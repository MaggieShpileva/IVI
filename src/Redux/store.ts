import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "@/sagas/RootSaga";
import { topMovieReducer } from "./topTenMovies/reducer";
import { moviesReducer } from "./movies/reducer";
import { homePageReducer } from "./homePage/reducer";
import { continueBrowsingReducer } from "./continue_browsing/reducer";
import { AuthUserReducer } from "./auth/reducer";
import { RegistrationUserReducer } from "./registration/reducer";
import { commentReducer } from "./comments/reducer";
import { MovieReducer } from "./movie/reducer";
import { filtersReducer } from "./filters/reducer";
import { moviesWithFiltersReducer } from "./moviesWithFilters/reducer";

const sagaMiddleware = createSagaMiddleware();
const makeStore = () => {
  const Store = configureStore({
    reducer: {
      topMovies: topMovieReducer,
      movies: moviesReducer,
      filters: filtersReducer,
      homePage: homePageReducer,
      continueBrowsing: continueBrowsingReducer,
      authData: AuthUserReducer,
      registrationData: RegistrationUserReducer,
      comment: commentReducer,
      movie: MovieReducer,
      moviesWithFilters: moviesWithFiltersReducer,
    },
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);

  return Store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = RootStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const store = makeStore();
export const wrapper = createWrapper<RootStore>(makeStore);
