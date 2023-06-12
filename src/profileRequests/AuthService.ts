import { getDataUserSuccess } from "@/Redux/auth/actions";
import { AuthResponseType, RegistrationUserType } from "@/types/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import $api from "./configeAxios";

export const Login = (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponseType>> => {
  return $api.post("/users/login", { email, password });
};

export const Registration = (
  nickname: string,
  email: string,
  password: string
): Promise<AxiosResponse<RegistrationUserType>> => {
  return $api.post("/users/registration", {
    userDto: { email: email, password: password },
    profileDto: { nickname: nickname },
  });
};

export const getDataUser = (id: number): Promise<AxiosResponse<any>> => {
  return $api.get(`/users/full/${id}`);
};

type DataCommentT = {
  id: number | undefined;
  review: string;
  profileId: string | null;
  filmId: string | string[] | undefined;
};

export const sendComment = (
  data: DataCommentT
): Promise<AxiosResponse<any>> => {
  return $api.post(`film/${data.filmId}/comment`, data);
};
