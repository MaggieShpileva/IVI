import { MovieKinopoiskT, PosterKinopoiskType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import comediesMovies from "../../../data/new_data/comedy.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PosterKinopoiskType[]>
) {
  res.status(200).json(comediesMovies);
}
