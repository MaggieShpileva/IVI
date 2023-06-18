import axios from "axios";
import data from "@/data/One_film_response_v2.json";
import { IMovieRes } from "@/types/types";

export const getDatMovieWorker = async (id: string | string[]) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://api.kinopoisk.dev/v1.3/movie/${id}`,
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `13RH6Q2-2T1M1E7-M50R852-366EP7D`,
      },
      params: {
        selectFields:
          "id names enName type year description rating votes movieLength ageRating videos genres countries persons",
      },
    });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("movie axios error", e);
  }
};
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
