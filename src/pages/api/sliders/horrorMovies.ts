import { PersonForSliderType, PosterKinopoiskType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import horrorMovies from "../../../data/new_data/horror_movies.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PosterKinopoiskType[]>
) {
  res.status(200).json(horrorMovies);
}
