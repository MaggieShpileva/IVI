import axios from "axios";
import data from "@/data/One_film_response_v2.json";
import { IMovieRes } from "@/types/types";
export const getDatMovieWorker = async (id: string | string[]) => {
  try {
    const response = await axios.get(
      `http://84.201.131.92:5003/film/${id}?lang=ru`
    );
    return response.data;
  } catch (e) {
    return new Promise<IMovieRes>((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
};
