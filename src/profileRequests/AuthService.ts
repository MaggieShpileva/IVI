import { getDataUserSuccess } from "@/Redux/auth/actions";
import { AuthResponseType, RegistrationUserType } from "@/types/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import $api from "./configeAxios";

export const Login = (
  email: string,
  password: string
): Promise<AxiosResponse<any>> => {
  return $api.get("/users");
};

export const Registration = (
  nickname: string,
  email: string,
  password: string
) => {
  return $api.post("/users", {
    email: email,
    name: nickname,
    password: password,
    role: "user",
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
