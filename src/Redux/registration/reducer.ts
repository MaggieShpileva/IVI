import { AuthResponseType, RegistrationUserType } from "@/types/types";
import { REGISTRATION_DATA } from "./action-types";

const initialData = {
  message: "User created",
  user: {
    email: "",
    password: "",
    name: "",
    role: "",
  },
  profile: { id: 0, userId: 0, nickname: "", updatedAt: "", createdAt: "" },
};

const initialState: RegistrationUserType = initialData;

export const RegistrationUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTRATION_DATA.GET_REGISTRATION_DATA_START:
      return action.type;
    case REGISTRATION_DATA.GET_REGISTRATION_DATA_FAIL:
      return initialData;
    case REGISTRATION_DATA.GET_REGISTRATION_DATA_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
