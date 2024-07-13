import { IMovie, MoviesForFilmsPageT } from "@/types/types";
import dataFilms from "@/data/Search_films_v2.json";
import { ISimpleMovie } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";
import movies from "@/data/new_data/movies.json";

export const movieAllApi = async () => {
  try {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(movies.docs);
      }, 1000);
    });
    return data;
  } catch (e) {
    console.log("get first movies");
  }
};

export const editGenresApi = async (args: any) => {
  console.log("async genre edit");
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { data } = await axios({
    method: "PUT",
    url: `https://84.201.131.92:5003/admin/genres/${args.id}`,
    data: {
      name: args.genre,
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return data;
};

export const filterGender = async (args: any) => {
  const data = movies.docs.filter((movie) =>
    movie.genres.some((genre) => genre.name === args.payload)
  );
  return data;
};
