import axios from "axios";
import data from "@/data/One_film_response_v2.json";

export const getDatMovieWorker = async (id: number) => {
  console.log("worker", id);
  // const https = require("https");
  // const agent = new https.Agent({
  //   rejectUnauthorized: false,
  // });
  // const response = await axios.get(
  //   `https://84.201.131.92:5003/film/${id}?lang=ru`,
  //   {
  //     httpsAgent: agent,
  //   }
  // );

  // return response.data;
  return data;
};
