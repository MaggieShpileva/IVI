import { MovieKinopoiskT, PosterKinopoiskType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import bestMovies from "../../../data/new_data/best-films.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PosterKinopoiskType[]>
) {
  res.status(200).json(bestMovies);
}
