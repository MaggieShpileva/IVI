import { BannerType, FilmLangType } from "@/types/types";
import { DATA_CONTINUE_BROWSING } from "./action-types";

export type BrowsingMovie = {
  id: number;
  poster: string;
  name: { ruName: string; enName: string };
  description: { ruName: string; enName: string };
};

const initialState: BrowsingMovie[] = [];

export const continueBrowsingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_CONTINUE_BROWSING.GET_CONTINUE_BROWSING:
      if (
        state.length !== 0 &&
        state[state.length - 1].id === action.payload.id
      ) {
        return state;
      } else {
        return [...state, action.payload];
      }

    default:
      return state;
  }
};
