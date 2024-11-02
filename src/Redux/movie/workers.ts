import axios from "axios";

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
