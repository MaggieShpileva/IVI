import { BannerType, ResponseTopMovieKPType } from "@/types/types";
import topMovie from "@/data/top_movie.json";
import axios from "axios";
import { TopMovieReducerT } from "./reducer";

export const getDataTopMoviesWorker = async () => {
  // const res = await axios({
  //   method: "get",
  //   url: "https://api.kinopoisk.dev/v1.3/movie",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-API-KEY": `13RH6Q2-2T1M1E7-M50R852-366EP7D`,
  //   },
  //   params: {
  //     Application: "13RH6Q2-2T1M1E7-M50R852-366EP7D",
  //     top10: "!null",
  //     selectFields: "id poster",
  //   },
  // });
  // return res.data.docs;
  return new Promise<ResponseTopMovieKPType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(topMovie.data);
    }, 1000);
  });
};
