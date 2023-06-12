import { DATA_CONTINUE_BROWSING } from "./action-types";

export const getContinueBrowsing = (payload: any) => ({
  type: DATA_CONTINUE_BROWSING.GET_CONTINUE_BROWSING,
  payload,
});
