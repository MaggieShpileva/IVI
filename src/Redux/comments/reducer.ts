import { BannerType } from "@/types/types";
import { DATA_COMMENTS } from "./action-types";

// export type BannerReducerT = {
//   data: BannerType[];
// };

const initialState: any = {
  data: [],
};

export const commentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_COMMENTS.SEND_COMMENT_START:
      return action.type;

    case DATA_COMMENTS.SEND_COMMENT_SUCCESS:
      return action.type;

    case DATA_COMMENTS.SEND_COMMENT:
      return action.type;

    case DATA_COMMENTS.SEND_COMMENT_FAIL:
      return action.type;

    default:
      return state;
  }
};
