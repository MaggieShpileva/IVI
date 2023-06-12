import { AuthResponseType } from "@/types/types";
import { AUTH_DATA } from "./action-types";

const initialState: AuthResponseType = {
  tokens: { accessToken: "", refreshToken: "" },
  user: { id: 0, email: "", password: "", createdAt: "", updatedAt: "" },
};

export const AuthUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_DATA.GET_AUTH_DATA_START:
      return action.type;
    case AUTH_DATA.GET_AUTH_DATA_FAIL:
      return {
        tokens: { accessToken: "", refreshToken: "" },
        user: { id: 0, email: "", password: "", createdAt: "", updatedAt: "" },
      };
    case AUTH_DATA.GET_AUTH_DATA_SUCCESS:
      return action.payload;
    case AUTH_DATA.CLEAR_AUTH_DATA:
      return {
        tokens: { accessToken: "", refreshToken: "" },
        user: { id: 0, email: "", password: "", createdAt: "", updatedAt: "" },
      };
    default:
      return state;
  }
};
